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
│   ├── fetch_posts.py         # Medium/Dev.to import
│   ├── fetch_books.py         # Goodreads favorites import
│   ├── fetch_reading.py       # Goodreads currently-reading import
│   └── pdf_to_images.py       # PDF slide conversion to images
├── Dockerfile.python          # Docker image for Python scripts with dependencies
├── Makefile                   # Docker-based development commands
└── CNAME                      # Domain configuration used when deploying the site
```

## Local Development

The project includes a Makefile with Docker-based commands that don't require local Hugo installation.

### Development Server

Start the development server with drafts enabled:

```bash
make serve
```

Visit `http://localhost:1313/` to browse the site with live reload.

Other serve options:

- `make serve-future` - Include future-dated posts
- `make serve-prod` - Production-like server (no drafts)
- `make serve-clean` - Server without drafts
- `PORT=8080 make serve` - Use custom port

### Building

Build the site for development:

```bash
make build
```

Build for production:

```bash
make build-prod
```

Static site output goes to `blog/public/`.

### Other Commands

- `make clean` - Remove build artifacts
- `make help` - Show all available commands

## Content Import Scripts

All Python scripts run in Docker containers with dependencies pre-installed. The Docker image is built automatically on first use.

### Medium/Dev.to Posts

Fetches posts from:

- https://medium.com/feed/@yrizos
- https://dev.to/feed/yrizos

and converts them into Hugo-ready Markdown files.

```bash
make fetch-posts
```

### Goodreads Books

#### Favorite Books

Fetches favorite books from Goodreads RSS feed and creates Hugo content files.

```bash
make fetch-books
```

#### Currently Reading

Fetches currently-reading books from Goodreads RSS feed.

```bash
make fetch-reading
```

### PDF to Images

Converts PDF presentation slides to JPG images for use in talk pages.

```bash
make pdf-to-images PDF=path/to/presentation.pdf
```
