# yrizos.com

Hugo-powered personal blog for https://yrizos.com.

## Directory Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-blog.yml    # GitHub Pages deployment workflow
├── blog/                      # Hugo site source containing content, layouts, and assets
│   ├── archetypes/            # Default front matter templates for new posts
│   ├── config/                # Environment-specific Hugo configuration files
│   ├── content/               # Markdown content files rendered into pages
│   ├── layouts/               # Hugo templates and partials that shape the site
│   ├── public/                # Generated static output after building
│   ├── resources/             # Hugo cache and processed pipeline artifacts
│   ├── static/                # Static assets (images, JS, CSS) served as-is
│   └── themes/                # Theme packages pulled into the site
├── scripts/                   # Utility scripts that support the blog workflow
│   └── fetch_posts.py         # Medium/Dev.to import
└── CNAME                      # Domain configuration used when deploying the site
```

## Local Development

### Serve

Install [Hugo](https://gohugo.io/getting-started/installing/), then run from the repository root:

```bash
hugo server --source blog
```

Visit `http://localhost:1313/` to browse the site with live reload.

### Build

```bash
hugo --source blog
```

Static site output goes to `blog/public/`.

## Medium/Dev.to import

Reads posts from:

- https://medium.com/feed/@yrizos
- https://dev.to/feed/yrizos

and converts them into Hugo-ready Markdown files.

### Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Run

```bash
python3 scripts/fetch_posts.py
```
