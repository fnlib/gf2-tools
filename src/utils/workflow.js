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
      "https://gf2-bbs-api.exiliumgf.com/community/topic/list"
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
    const topicList = await getTopicList();
    await fetch("https://gf2-bbs-api.exiliumgf.com/community/task/sign_in", {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });
    topicList.data.list.forEach((item, index) => {
      if (index > 2) {
        return;
      }
      fetch(
        `https://gf2-bbs-api.exiliumgf.com/community/topic/like/${item.topic_id}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
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
      !hasSignIn.data.has_sign_in
        ? (signInHandle(), exchangeHandle())
        : exchangeHandle();
    }
  };
  workflow();
})();
