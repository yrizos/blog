"""BlogPost data transfer object."""

from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional


@dataclass
class BlogPost:
    title: str
    slug: str
    date: datetime
    original_url: str
    markdown_body: str
    tags: List[str] = field(default_factory=list)
    image_url: Optional[str] = None
    image_alt: str = ""
