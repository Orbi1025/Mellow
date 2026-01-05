(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    6610: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 7508)),
        Promise.resolve().then(r.bind(r, 7731)),
        Promise.resolve().then(r.bind(r, 3277)),
        Promise.resolve().then(r.bind(r, 9117)),
        Promise.resolve().then(r.bind(r, 8614)),
        Promise.resolve().then(r.bind(r, 9767)),
        Promise.resolve().then(r.bind(r, 9593)),
        Promise.resolve().then(r.bind(r, 2972)),
        Promise.resolve().then(r.bind(r, 2683)),
        Promise.resolve().then(r.bind(r, 4850)),
        Promise.resolve().then(r.bind(r, 2998)),
        Promise.resolve().then(r.bind(r, 1661)),
        Promise.resolve().then(r.bind(r, 2791)),
        Promise.resolve().then(r.bind(r, 6725)),
        Promise.resolve().then(r.t.bind(r, 8173, 23)),
        Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.t.bind(r, 9836, 23)),
        Promise.resolve().then(r.t.bind(r, 1651, 23)),
        Promise.resolve().then(r.t.bind(r, 8604, 23)),
        Promise.resolve().then(r.t.bind(r, 6379, 23)),
        Promise.resolve().then(r.t.bind(r, 2217, 23));
    },
    7508: function (e, t, r) {
      "use strict";
      var o = r(7437),
        s = r(1827),
        a = r(2265);
      t.default = () => {
        let [e, t] = (0, a.useState)("home");
        return (
          (0, a.useEffect)(() => {
            let e = document.querySelectorAll("section"),
              r = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && t(e.target.id);
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.6 }
              );
            return (
              e.forEach((e) => {
                r.observe(e);
              }),
              () => {
                e.forEach((e) => r.unobserve(e));
              }
            );
          }, []),
          (0, o.jsx)("div", {
            className:
              "menu z-[99999] shadow-2xl text-nowrap h-[80px] rounded-full w-[90%] xl:w-[1350px] fixed bottom-[30px] bg-[#EBC072] border-[#472A1A] border-4 hidden lg:block",
            children: (0, o.jsxs)("div", {
              className:
                "menu-list gap-[.5rem] flex w-full justify-center items-center h-full",
              children: [
                (0, o.jsx)("a", {
                  href: "#home",
                  className: "none md:block rounded-full ".concat(
                    "home" === e ? "active" : ""
                  ),
                  children: "Home",
                }),
                (0, o.jsx)("a", {
                  href: "#about",
                  className: "none md:block rounded-full ".concat(
                    "about" === e ? "active" : ""
                  ),
                  children: "About",
                }),
                (0, o.jsx)("a", {
                  href: "#partnerships",
                  className: "none md:block rounded-full ".concat(
                    "partnerships" === e ? "active" : ""
                  ),
                  children: (0, o.jsx)(s.O, {
                    content: "new",
                    className: "border-none",
                    color: "primary",
                    size: "sm",
                    children: (0, o.jsx)("p", { children: "Partnerships" }),
                  }),
                }),
                (0, o.jsx)("a", {
                  href: "#Tokenomics",
                  className: "none md:block rounded-full ".concat(
                    "Tokenomics" === e ? "active" : ""
                  ),
                  children: "Tokenomics",
                }),
                (0, o.jsx)("a", {
                  href: "https://mememaker.furiesmellow.vip",
                  target: "_blank",
                  className: "none md:block rounded-full",
                  children: "Meme Maker",
                }),
                (0, o.jsx)("a", {
                  href: "#Disclaimer",
                  className: "none md:block rounded-full ".concat(
                    "Disclaimer" === e ? "active" : ""
                  ),
                  children: "Disclaimer",
                }),
              ],
            }),
          })
        );
      };
    },
    7731: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(2567),
        a = r(4856);
      t.default = () =>
        (0, o.jsxs)(s.d, {
          className: "!px-0",
          variant: "splitted",
          itemClasses: {
            base: "!bg-[#0c0c0c48] text-white",
            title: "text-white",
            content: "text-white",
            indicator: "text-white",
          },
          children: [
            (0, o.jsx)(
              a.G,
              {
                "aria-label": "Legal Disclaimer",
                title: "Legal Disclaimer",
                children: (0, o.jsx)("p", {
                  style: {
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "24px",
                  },
                  children:
                    'The content on the Mellow Token website is not meant to be understood as investment, financial, trading, or any form of advice, and should not be interpreted as such. Mellow Token does not suggest that any should be bought, sold, or held by you. It is important to perform your own thorough research and consult with your financial advisor prior to making any investment decisions. By acquiring Mellow Token, you acknowledge that you are not obtaining a security or investment and you agree to absolve Mellow Token of any responsibility for any losses or taxes you may face. Additionally, you accept that Mellow Token is offered "as is" without any obligation for support or services. Expectations from Mellow Token should be none. Although Mellow Token is designed for social networking and is not a registered digital currency, it is highly advised that individuals in locations where is banned by the government refrain from purchasing it, as Mellow Token cannot guarantee adherence to the legal requirements of your region. Always ensure your actions are in full compliance with local laws and regulations before making any purchases.',
                }),
              },
              "1"
            ),
            (0, o.jsx)(
              a.G,
              {
                "aria-label": "Risk Disclosure",
                title: "Risk Disclosure",
                children: (0, o.jsx)("p", {
                  style: {
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "14px",
                    lineHeight: "24px",
                  },
                  children:
                    "Please note there are always risks associated with smart-contracts. Please use at your own risk. mellowman.org is not a registered broker, analyst, or investment advisor. Everything that’s provided on this site is purely for guidance, informational and educational purposes, and fun. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose.",
                }),
              },
              "2"
            ),
          ],
        });
    },
    3277: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(3242),
        a = r(2782),
        n = r(441),
        l = r(9355),
        i = r(7776),
        d = r(7138);
      t.default = () =>
        (0, o.jsx)(s.w, {
          classNames: {
            base: "!bg-[#0c0c0c48] text-white w-full rounded-2xl shadow-none h-[80px] hidden sm:flex !px-0",
          },
          children: (0, o.jsxs)(a.G, {
            className:
              "relative flex flex-row items-center justify-between text-center ",
            children: [
              (0, o.jsx)(n.A, {
                size: "lg",
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                as: d.default,
                target: "_blank",
                color: "default",
                radius: "lg",
                className:
                  "data-[hover=true]:bg-[#c9c9c9] data-[hover=true]:opacity-100 border-[1px] border-[#65422C]",
                children: "Buy $MELLOW",
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center gap-2 justify-center",
                children: [
                  (0, o.jsx)("p", {
                    className: "overflow-hidden text-nowrap text-ellipsis",
                    children: "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                  }),
                  (0, o.jsx)(l.JO, {
                    icon: "lucide:copy",
                    className: "cursor-pointer",
                    onClick: () => {
                      navigator.clipboard.writeText(
                        "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77"
                      ),
                        i.Am.info("Copied Address to clipboard");
                    },
                  }),
                ],
              }),
            ],
          }),
        });
    },
    9117: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(3242),
        a = r(2782),
        n = r(9355),
        l = r(7776);
      t.default = () =>
        (0, o.jsx)(s.w, {
          classNames: {
            base: "!bg-[#0c0c0c48] text-white w-full rounded-2xl shadow-none h-[100px] flex sm:hidden",
          },
          children: (0, o.jsxs)(a.G, {
            className:
              "relative flex flex-col items-center justify-center text-center px-12",
            children: [
              (0, o.jsx)("p", {
                className: "text-center",
                children: "Buy $MELLOW",
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center w-full gap-1 justify-center",
                children: [
                  (0, o.jsx)("p", {
                    className: "overflow-hidden text-nowrap text-ellipsis",
                    children: "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                  }),
                  (0, o.jsx)(n.JO, {
                    icon: "lucide:copy",
                    className: "cursor-pointer",
                    onClick: () => {
                      navigator.clipboard.writeText(
                        "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77"
                      ),
                        l.Am.info("Copied Address to clipboard");
                    },
                  }),
                ],
              }),
            ],
          }),
        });
    },
    8614: function (e, t, r) {
      "use strict";
      var o = r(7437),
        s = r(9355);
      r(2265),
        (t.default = () =>
          (0, o.jsx)("a", {
            href: "https://t.me/MellowMan_matt",
            target: "_blank",
            children: (0, o.jsx)(s.JO, {
              icon: "akar-icons:telegram-fill",
              className: "cursor-pointer",
            }),
          }));
    },
    9767: function (e, t, r) {
      "use strict";
      var o = r(7437),
        s = r(9355);
      r(2265),
        (t.default = () =>
          (0, o.jsx)("a", {
            href: "https://x.com/MellowMan_matt",
            target: "_blank",
            children: (0, o.jsx)(s.JO, {
              icon: "akar-icons:twitter-fill",
              className: "cursor-pointer",
            }),
          }));
    },
    9593: function (e, t, r) {
      "use strict";
      var o = r(7437),
        s = r(2265);
      r(9836);
      var a = r(6491),
        n = r(441),
        l = r(9355),
        i = r(7307);
      t.default = () => {
        let [e, t] = (0, s.useState)(!0);
        return (0, o.jsxs)("div", {
          className:
            "hero-banner flex w-full items-center justify-center border-1 border-divider bg-gradient-to-r from-[#fbe926] via-[#FBD026] to-[#EBC072] px-6 py-2 sm:px-3.5 transition-opacity duration-300 ".concat(
              e ? "opacity-100" : "opacity-0 pointer-events-none"
            ),
          children: [
            (0, o.jsxs)("div", {
              className: "flex w-full items-center gap-x-3 justify-center",
              children: [
                (0, o.jsx)(i.z, {
                  size: "sm",
                  variant: "shadow",
                  classNames: {
                    base: "bg-gradient-to-br from-yellow-300 to-yellow-500 border-small border-white/50 shadow-yellow-500/70 flex sm:hidden",
                    content:
                      "drop-shadow shadow-black text-white cursor-default",
                  },
                  children: "New",
                }),
                (0, o.jsx)("p", {
                  className: "text-small text-foreground flex sm:hidden",
                  children: (0, o.jsx)(a.O, {
                    className: "text-inherit text-center",
                    href: "#",
                    children: "New Hyper Raid Bot\xa0",
                  }),
                }),
                (0, o.jsx)("p", {
                  className: "text-small text-foreground hidden sm:flex",
                  children: (0, o.jsx)(a.O, {
                    className: "text-inherit",
                    href: "#",
                    children: "New Hyper Raid Bot | Powered by $MELLOW\xa0",
                  }),
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: "flex flex-1 justify-end",
              children: (0, o.jsx)(n.A, {
                isIconOnly: !0,
                onPress: () => {
                  t(!1);
                },
                "aria-label": "Close Banner",
                className: "-m-1",
                size: "sm",
                variant: "light",
                children: (0, o.jsx)(l.JO, {
                  "aria-hidden": "true",
                  className: "text-default-500",
                  icon: "lucide:x",
                  width: 20,
                }),
              }),
            }),
          ],
        });
      };
    },
    2972: function (e, t, r) {
      "use strict";
      var o = r(7437),
        s = r(2265),
        a = r(441),
        n = r(6491),
        l = r(3049),
        i = r(3095),
        d = r(5625),
        c = r(5326),
        u = r(7017),
        m = r(9355),
        p = r(3916);
      t.default = () => {
        let [e, t] = (0, s.useState)(!1),
          r = { closed: { rotate: 0 }, open: { rotate: 180 } };
        return (0, o.jsxs)("div", {
          className: "flex w-full flex-col gap-2 sm:gap-6",
          children: [
            (0, o.jsxs)("div", {
              className:
                "hidden sm:flex w-full gap-6 items-center justify-center z-10",
              children: [
                (0, o.jsx)(a.A, {
                  size: "lg",
                  href: "https://mememaker.furiesmellow.vip/",
                  as: n.O,
                  target: "_blank",
                  color: "default",
                  radius: "full",
                  className:
                    "data-[hover=true]:bg-[#c9c9c9]  data-[hover=true]:opacity-100 border-[1px] border-[#65422C]",
                  children: "Meme Maker",
                }),
                (0, o.jsxs)(i.F, {
                  showArrow: !0,
                  onOpenChange: (e) => t(e),
                  classNames: {
                    content:
                      "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  },
                  children: [
                    (0, o.jsx)(d.S, {
                      children: (0, o.jsx)(a.A, {
                        color: "default",
                        radius: "full",
                        endContent: (0, o.jsx)(p.E.div, {
                          animate: e ? "open" : "closed",
                          variants: r,
                          transition: { duration: 0.1 },
                          children: (0, o.jsx)(m.JO, {
                            icon: "mingcute:down-fill",
                          }),
                        }),
                        size: "lg",
                        className:
                          "data-[hover=true]:bg-[#c9c9c9] data-[hover=true]:opacity-100 border-[1px] border-[#65422C]",
                        children: "Links",
                      }),
                    }),
                    (0, o.jsx)(c.a, {
                      variant: "faded",
                      "aria-label": "Socials",
                      children: (0, o.jsxs)(l.d, {
                        title: "Key Links",
                        children: [
                          (0, o.jsx)(
                            u.W,
                            {
                              onPress: () => {
                                window.open(
                                  "https://t.me/MellowMan_matt",
                                  "_blank"
                                );
                              },
                              className: "text-default-foreground",
                              description: "Join our TG Community",
                              href: "https://t.me/MellowMan_matt",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mingcute:telegram-fill",
                              }),
                              children: "Join Telegram",
                            },
                            "tg"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              onPress: () => {
                                window.open(
                                  "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                                  "_blank"
                                );
                              },
                              description: "Buy on Uniswap",
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                              as: n.O,
                              target: "_blank",
                              className: "text-default-foreground",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "token:uni",
                              }),
                              children: "Buy on Uniswap",
                            },
                            "uniswapdesktop"
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "flex sm:hidden w-full gap-2 items-center justify-center z-10",
              children: [
                (0, o.jsx)(a.A, {
                  onPress: () => {
                    window.open(
                      "https://mememaker.furiesmellow.vip/",
                      "_blank"
                    );
                  },
                  size: "sm",
                  color: "default",
                  href: "https://mememaker.furiesmellow.vip/",
                  as: n.O,
                  target: "_blank",
                  radius: "full",
                  className:
                    "data-[hover=true]:bg-[#c9c9c9] data-[hover=true]:opacity-100 border-[1px] border-[#65422C]",
                  children: "Meme Maker",
                }),
                (0, o.jsxs)(i.F, {
                  showArrow: !0,
                  onOpenChange: (e) => t(e),
                  classNames: {
                    content:
                      "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  },
                  children: [
                    (0, o.jsx)(d.S, {
                      children: (0, o.jsx)(a.A, {
                        color: "default",
                        radius: "full",
                        endContent: (0, o.jsx)(p.E.div, {
                          animate: e ? "open" : "closed",
                          variants: r,
                          transition: { duration: 0.1 },
                          children: (0, o.jsx)(m.JO, {
                            icon: "mingcute:down-fill",
                          }),
                        }),
                        size: "sm",
                        className:
                          "data-[hover=true]:bg-[#c9c9c9] data-[hover=true]:opacity-100 border-[1px] border-[#65422C]",
                        children: "Links",
                      }),
                    }),
                    (0, o.jsx)(c.a, {
                      variant: "faded",
                      "aria-label": "Socials",
                      children: (0, o.jsxs)(l.d, {
                        title: "Key Links",
                        children: [
                          (0, o.jsx)(
                            u.W,
                            {
                              onPress: () => {
                                window.open(
                                  "https://t.me/MellowMan_matt",
                                  "_blank"
                                );
                              },
                              className: "text-default-foreground",
                              description: "Join our TG Community",
                              href: "https://t.me/MellowMan_matt",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mingcute:telegram-fill",
                              }),
                              children: "Join Telegram",
                            },
                            "tg"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              onPress: () => {
                                window.open(
                                  "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                                  "_blank"
                                );
                              },
                              description: "Buy on Uniswap",
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                              as: n.O,
                              target: "_blank",
                              className: "text-default-foreground",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "token:uni",
                              }),
                              children: "Buy on Uniswap",
                            },
                            "uniswapdesktop"
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "hidden sm:flex w-full gap-6 items-center justify-center z-10",
              children: [
              ],
            }),
            (0, o.jsxs)("div", {
              className:
                "flex sm:hidden w-full gap-2 items-center justify-center z-10",
              children: [
                (0, o.jsxs)(i.F, {
                  showArrow: !0,
                  classNames: {
                    content:
                      "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  },
                  children: [
                    (0, o.jsx)(d.S, {
                      children: (0, o.jsxs)(a.A, {
                        color: "primary",
                        radius: "full",
                        size: "sm",
                        className:
                          "relative px-4 py-2 text-white rounded-[50px] leading-none overflow-hidden",
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_var(--rotate),transparent_0%,white_5%,transparent_10%)] before:animate-[rotate_3s_linear_infinite]",
                            style: { "--rotate": "0deg" },
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "absolute inset-[2px] bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-[48px]",
                          }),
                          (0, o.jsx)("span", {
                            className:
                              "relative z-10 font-medium text-sm text-black",
                            children: "Hyper Raid Bot",
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsx)(c.a, {
                      variant: "faded",
                      "aria-label": "Links",
                      children: (0, o.jsxs)(l.d, {
                        title: "Links",
                        children: [
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "@HyperRaidBot",
                              href: "https://t.me/HyperRaidBot?startgroup=true&admin",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mingcute:telegram-fill",
                              }),
                              children: "Add Bot to Group",
                            },
                            "tg"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              description: "View Hyper Raid Bot Docs",
                              href: "https://hyper.furiesmellow0x69.com",
                              as: n.O,
                              target: "_blank",
                              className: "text-default-foreground",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mingcute:file-fill",
                              }),
                              children: "View Docs",
                            },
                            "docs-raid"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              description: "Join TG Support Group",
                              href: "https://t.me/MellowManRaidBotSupport",
                              as: n.O,
                              target: "_blank",
                              className: "text-default-foreground",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "fluent:person-support-16-filled",
                              }),
                              children: "Help/Support",
                            },
                            "docs-raids"
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)(i.F, {
                  showArrow: !0,
                  classNames: {
                    content:
                      "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                  },
                  children: [
                    (0, o.jsx)(d.S, {
                      children: (0, o.jsxs)(a.A, {
                        color: "primary",
                        radius: "full",
                        size: "sm",
                        className:
                          "relative px-4 py-2 text-white rounded-[50px] leading-none overflow-hidden",
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_var(--rotate),transparent_0%,white_5%,transparent_10%)] before:animate-[rotate_3s_linear_infinite]",
                            style: { "--rotate": "0deg" },
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "absolute inset-[2px] bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-[48px]",
                          }),
                          (0, o.jsx)("span", {
                            className:
                              "relative z-10 font-medium text-sm text-black",
                            children: "Hyper Volume Bot",
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsx)(c.a, {
                      disabledKeys: ["sol"],
                      variant: "faded",
                      "aria-label": "Links",
                      children: (0, o.jsxs)(l.d, {
                        title: "Links",
                        children: [
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "Hyper Volume Bot",
                              href: "https://t.me/MellowHyperVolumeBot",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "lucide:bot",
                              }),
                              children: "Add Bot",
                            },
                            "eth"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "View Video Showcase",
                              href: "https://youtu.be/u_3OEX3oX9g",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mdi:video",
                              }),
                              children: "Video Showcase",
                            },
                            "video-showcase"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "View Brochure",
                              href: "https://drive.google.com/file/d/1zr4zdomOKNsVfiCcmQ3c3_MKLnfr4Syw/view?usp=drive_link",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "gala:brochure",
                              }),
                              children: "View Brochure",
                            },
                            "brochure"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "View Instruction Manual",
                              href: "https://drive.google.com/file/d/18d9J2q_SeJbBuwsWl6oi0sU2eUe3aStd/view?usp=sharing",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "mingcute:file-fill",
                              }),
                              children: "View Instruction Manual",
                            },
                            "instruction-manual"
                          ),
                          (0, o.jsx)(
                            u.W,
                            {
                              className: "text-default-foreground",
                              description: "Join TG Help/Support Group",
                              href: "https://t.me/MellowVolumeBotSupport",
                              as: n.O,
                              target: "_blank",
                              startContent: (0, o.jsx)(m.JO, {
                                icon: "fluent:person-support-16-filled",
                              }),
                              children: "Help/Support",
                            },
                            "help-support"
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    2683: function (e, t, r) {
      "use strict";
      r.d(t, {
        LinkAnimatedTooltips: function () {
          return u;
        },
      });
      var o = r(7437),
        s = r(6648),
        a = r(2265),
        n = r(5282),
        l = r(6391),
        i = r(7402),
        d = r(4446),
        c = r(3916);
      let u = (e) => {
        let { items: t } = e,
          [r, u] = (0, a.useState)(null),
          m = { stiffness: 100, damping: 5 },
          p = (0, n.c)(0),
          h = (0, l.q)((0, i.H)(p, [-100, 100], [-45, 45]), m),
          f = (0, l.q)((0, i.H)(p, [-100, 100], [-50, 50]), m),
          x = (e) => {
            let t = e.target.offsetWidth / 2;
            p.set(e.nativeEvent.offsetX - t);
          };
        return (0, o.jsx)(o.Fragment, {
          children: t.map((e, t) =>
            (0, o.jsxs)(
              "div",
              {
                className: "-mr-4  relative group",
                onMouseEnter: () => u(e.id),
                onMouseLeave: () => u(null),
                children: [
                  (0, o.jsx)(d.M, {
                    mode: "popLayout",
                    children:
                      r === e.id &&
                      (0, o.jsxs)(c.E.div, {
                        initial: { opacity: 0, y: 20, scale: 0.6 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 10,
                          },
                        },
                        exit: { opacity: 0, y: 20, scale: 0.6 },
                        style: {
                          translateX: f,
                          rotate: h,
                          whiteSpace: "nowrap",
                        },
                        className:
                          "absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-yellow-300 z-50 shadow-xl px-4 py-2",
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-[#fbe926] via-[#FBD026] to-transparent h-px ",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent  via-[#FBD026]  to-transparent h-px ",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "font-bold text-black relative z-30 text-base",
                            children: e.name,
                          }),
                          (0, o.jsx)("div", {
                            className: "text-black text-xs",
                            children: e.designation,
                          }),
                        ],
                      }),
                  }),
                  (0, o.jsx)(s.default, {
                    onMouseMove: x,
                    onClick: () => window.open(e.url, "_blank"),
                    height: 100,
                    width: 100,
                    src: e.image,
                    alt: e.name,
                    className:
                      "object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:cursor-pointer border-yellow-300  relative transition duration-500",
                  }),
                ],
              },
              e.name
            )
          ),
        });
      };
    },
    4850: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return u;
        },
      });
      var o = r(7437);
      r(2265);
      var s = () =>
          (0, o.jsx)("h3", {
            className:
              "font-bold text-[#fffb0fe7] text-[50px] md:text[60px] xl:text-[90px] shadow_title mb-5",
            children: "Partnerships",
          }),
        a = () =>
          (0, o.jsx)("p", {
            className:
              "text-[22px] text-default-foreground px-[1rem] md:w-[50%]",
            children:
              "The projects we partner with are carefully selected and represent some of the most innovative and influential teams in the space!",
          }),
        n = r(7307),
        l = r(441),
        i = r(6648),
        d = r(7138),
        c = r(9355),
        u = () =>
          (0, o.jsx)("section", {
            id: "partnerships",
            className:
              "token_container section_links w-full bg-[#FFE3B1] pt-[30px] pb-[100px] relative h-auto snow-cap flex items-center justify-center flex-col gap-[3rem]",
            children: (0, o.jsxs)("div", {
              className: "title w-full text-center flex flex-col items-center",
              children: [
                (0, o.jsx)(n.z, {
                  size: "lg",
                  variant: "shadow",
                  classNames: {
                    base: "bg-gradient-to-br from-yellow-300 to-yellow-500 border-small border-white/50 shadow-yellow-500/70 new-chip duration-100",
                    content:
                      "drop-shadow shadow-black text-white cursor-default",
                  },
                  children: "New",
                }),
                (0, o.jsx)(s, {}),
                (0, o.jsx)(a, {}),
                (0, o.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row w-full justify-around px-3 sm:px-[150px] items-center mt-12 h-[900px] sm:h-[600px]",
                  children: [
                    (0, o.jsxs)("div", {
                      className:
                        "flex flex-col gap-1 items-center justify-center mb-[4rem] sm:mb-0",
                      children: [
                        (0, o.jsx)(i.default, {
                          width: 300,
                          height: 300,
                          className:
                            "w-[300px] md:w-[300px] 2xl:w-[400px] h-auto object-contain new-chip",
                          style: { animationDelay: ".7s" },
                          alt: "BUY $MELLOW",
                          src: "/dextools-seeklogo.svg",
                        }),
                        (0, o.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-4 mt-6 w-full",
                          children: [
                            (0, o.jsx)("p", {
                              className:
                                "text-[14px] sm:text-[16px] text-default-foreground max-w-[500px] text-center mb-6",
                              children:
                                "The Mellow Man team are really excited to be working with DexTools who have rightly established a reputation as the market leading Dex aggregator. The partership and collaboration will benefit both our community and the wider space as we share technology and growth opportunities.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "flex flex-col gap-1 items-center justify-center max-w-[500px] rotate-12",
                      children: (0, o.jsxs)("div", {
                        className:
                          "relative flex rounded-xl border-[#FADBA2] bg-[#FADBA2] border-[10px]",
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "flex w-full h-full bg-[#FEECD4] rounded-lg p-2",
                            children: (0, o.jsxs)("p", {
                              className:
                                "text-default-foreground text-[24px] text-center",
                              children: [
                                '"This collaboration represents our commitment to provide our users with useful resource, empowering them to navigate the DeFi space with greater efficiency and success." ',
                                (0, o.jsx)("span", {
                                  children: (0, o.jsx)("div", {
                                    className:
                                      "text-default-foreground/50 italic",
                                    children:
                                      "- Frederic Fernandez, CMO of DexTools.",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, o.jsx)(i.default, {
                            width: 40,
                            height: 40,
                            unoptimized: !0,
                            className:
                              "absolute h-auto w-[200px] right-[-12px] bottom-[-35px]",
                            alt: "bruh",
                            src: "/token_ice.svg",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
    },
    2998: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(3242),
        a = r(2782),
        n = r(9355);
      t.default = (e) => {
        let { text: t, icon: r } = e;
        return (0, o.jsx)(s.w, {
          classNames: {
            base: "bg-[#FEECD4] w-full md:w-[700px] md:max-w-[700px] rounded-full shadow-none",
          },
          children: (0, o.jsxs)(a.G, {
            className:
              "relative flex flex-row  items-center justify-center flex-wrap ",
            children: [
              (0, o.jsx)(n.JO, {
                icon: r,
                height: 24,
                className: "absolute left-4 text-default-foreground",
              }),
              (0, o.jsx)("p", {
                className: "text-default-foreground text-center",
                children: t,
              }),
            ],
          }),
        });
      };
    },
    1661: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(3242),
        a = r(2782),
        n = r(9355),
        l = r(7776);
      t.default = () =>
        (0, o.jsx)(s.w, {
          classNames: {
            base: "bg-[#FEECD4] w-full rounded-3xl shadow-none h-[100px] hidden sm:flex",
          },
          children: (0, o.jsxs)(a.G, {
            className:
              "relative flex flex-row items-center justify-between text-center px-12 flex-wrap ",
            children: [
              (0, o.jsx)("p", {
                className: "text-default-foreground text-center",
                children: "Buy $MELLOW",
              }),
              (0, o.jsxs)("div", {
                className:
                  "flex items-center justify-between max-[600px]:w-full w-[75%] gap-[1rem] md:gap-[3rem] border-[#05050536] border-[1px] px-[1rem] py-[1rem] rounded-lg",
                children: [
                  (0, o.jsx)("p", {
                    className:
                      "overflow-hidden text-nowrap max-[600px]:w-[70%] text-ellipsis value max-[600px]:ml-[1rem] font-bold text-[1rem] text-default-foreground",
                    children: "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                  }),
                  (0, o.jsx)(n.JO, {
                    icon: "lucide:copy",
                    className:
                      "text-default-foreground cursor-pointer hover:text-default-foreground/50",
                    onClick: () => {
                      navigator.clipboard.writeText(
                        "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77"
                      ),
                        l.Am.info("Copied Address to clipboard");
                    },
                  }),
                ],
              }),
            ],
          }),
        });
    },
    2791: function (e, t, r) {
      "use strict";
      var o = r(7437);
      r(2265);
      var s = r(3242),
        a = r(2782),
        n = r(9355),
        l = r(7776);
      t.default = () =>
        (0, o.jsx)(s.w, {
          classNames: {
            base: "bg-[#FEECD4] w-full rounded-3xl shadow-none h-[100px] flex sm:hidden",
          },
          children: (0, o.jsxs)(a.G, {
            className:
              "relative flex flex-col items-center justify-center text-center px-12",
            children: [
              (0, o.jsx)("p", {
                className: "text-default-foreground text-center",
                children: "Buy $MELLOW",
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center w-full gap-1",
                children: [
                  (0, o.jsx)("p", {
                    className:
                      "overflow-hidden text-nowrap text-ellipsis text-default-foreground",
                    children: "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77",
                  }),
                  (0, o.jsx)(n.JO, {
                    icon: "lucide:copy",
                    className:
                      "text-default-foreground cursor-pointer hover:text-default-foreground/50",
                    onClick: () => {
                      navigator.clipboard.writeText(
                        "0x34Bdfb997bCAbc8D93BD60f6e59B72cb4B8c6C77"
                      ),
                        l.Am.info("Copied Address to clipboard");
                    },
                  }),
                ],
              }),
            ],
          }),
        });
    },
    9836: function () {},
    1651: function () {},
    8604: function () {},
    6379: function () {},
    2217: function () {},
  },
  function (e) {
    e.O(0, [19, 476, 518, 226, 138, 978, 319, 971, 23, 744], function () {
      return e((e.s = 6610));
    }),
      (_N_E = e.O());
  },
]);
