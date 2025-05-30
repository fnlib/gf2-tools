// ==UserScript==
// @name         追放社区工具
// @namespace    https://fnlib.github.io/gf2-tools/skill
// @version      1.0
// @description  少前2追放社区一键签到任务兑换
// @author       榛果儿
// @match        https://gf2-bbs.exiliumgf.com/*
// @icon         https://gf2-cn.cdn.sunborngame.com/website/official/web_head.jpg
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const token = localStorage.getItem("key");

  const getSignInStatus = async () => {
    const signInRes = await fetch(
      "https://gf2-bbs-api.exiliumgf.com/community/task/get_current_sign_in_status",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    return signInRes.json();
  };

  const getTopicList = async () => {
    const topicList = await fetch(
      "https://gf2-bbs-api.exiliumgf.com/community/topic/list?sort_type=2&category_id=5",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    return topicList.json();
  };

  const getExchangeList = async () => {
    const exchangeList = await fetch(
      "https://gf2-bbs-api.exiliumgf.com/community/item/exchange_list",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    return exchangeList.json();
  };

  const signInHandle = async () => {
    await fetch("https://gf2-bbs-api.exiliumgf.com/community/task/sign_in", {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });
  };

  const topicLike = async (topic_id) => {
    fetch(
      `https://gf2-bbs-api.exiliumgf.com/community/topic/like/${topic_id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
  };

  const taskHandle = async () => {
    const topicList = await getTopicList();

    topicList.data.list.forEach((item, index) => {
      if (index > 2) {
        return;
      }
      if (item.is_like) {
        topicLike(item.topic_id);
      }
      topicLike(item.topic_id);
      fetch(
        `https://gf2-bbs-api.exiliumgf.com/community/topic/${item.topic_id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      fetch(
        `https://gf2-bbs-api.exiliumgf.com/community/topic/share/${item.topic_id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
    });
  };

  const exchangeHandle = async () => {
    const exchangeList = await getExchangeList();

    exchangeList.data.list.forEach((item) => {
      for (let i = item.exchange_count; i < item.max_exchange_count; i++) {
        fetch("https://gf2-bbs-api.exiliumgf.com/community/item/exchange", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ exchange_id: item.exchange_id }),
        });
      }
    });
  };

  const workflow = async () => {
    const hasSignIn = await getSignInStatus();

    if (token != null) {
      if (!hasSignIn.data.has_sign_in) {
        signInHandle();
        taskHandle();
      }
      exchangeHandle();
    }
  };

  workflow();
})();
