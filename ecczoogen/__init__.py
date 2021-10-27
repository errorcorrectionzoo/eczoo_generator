import sys
import logging
import colorlog

def setup_logging(level=logging.INFO):
    # You should use colorlog >= 6.0.0a4
    handler = colorlog.StreamHandler()
    handler.setFormatter( colorlog.LevelFormatter(
        log_colors={
            "DEBUG": "white",
            "INFO": "",
            "WARNING": "red",
            "ERROR": "bold_red",
            "CRITICAL": "bold_red",
        },
        fmt={
            # emojis we can use: 🐞 🐜 🚨 🚦 ⚙️ 🧨 🧹 ❗️❓‼️ ⁉️ ⚠️ ℹ️ ➡️ ✔️ 〰️
            # 🎶 💭 📣 🔔 ⏳ 🔧 🔩 ✨ 💥 🔥 🐢 👉
            "DEBUG":    "%(log_color)s〰️    %(message)s", #'  [%(name)s]'
            "INFO":     "%(log_color)s✨  %(message)s",
            "WARNING":  "%(log_color)s⚠️   %(message)s", # (%(module)s:%(lineno)d)",
            "ERROR":    "%(log_color)s🚨  %(message)s", # (%(module)s:%(lineno)d)",
            "CRITICAL": "%(log_color)s🚨  %(message)s", # (%(module)s:%(lineno)d)",
        },
        stream=sys.stderr
    ) )

    root = colorlog.getLogger()
    root.addHandler(handler)

    root.setLevel(level)
