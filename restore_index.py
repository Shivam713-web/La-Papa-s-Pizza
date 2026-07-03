import json
import re

transcript_path = r"C:\Users\Shivam\.gemini\antigravity-ide\brain\40d045c9-bdad-48fd-9cba-e2298f593d9b\.system_generated\logs\transcript_full.jsonl"
output_path = r"e:\New folder\index.html"

with open(transcript_path, 'r', encoding='utf-8') as f:
    steps = [json.loads(line) for line in f if line.strip()]

step7_content = next(s["content"] for s in steps if s.get("step_index") == 7)
step13_content = next(s["content"] for s in steps if s.get("step_index") == 13)

def clean_content(content):
    lines = []
    for line in content.splitlines():
        m = re.match(r"^\s*(\d+):\s(.*)$", line)
        if m:
            lines.append((int(m.group(1)), m.group(2)))
    return lines

lines7 = clean_content(step7_content)
lines13 = clean_content(step13_content)

all_lines = {ln: text for ln, text in lines7}
all_lines.update({ln: text for ln, text in lines13})

sorted_lns = sorted(all_lines.keys())
full_html = "\n".join(all_lines[ln] for ln in sorted_lns)

# Apply brand updates
full_html = full_html.replace(
    '<meta name="description" content="FireCrust Pizza - Order delicious handcrafted pizzas online. Fresh ingredients, fast delivery, and amazing deals. Your favorite pizza is just a click away!">',
    '<meta name="description" content="La Papa\'s Pizza - Order delicious handcrafted pizzas online. Fresh ingredients, fast delivery, and amazing deals. Your favorite pizza is just a click away!">'
)
full_html = full_html.replace(
    '<title>FireCrust Pizza | Fresh Handcrafted Pizzas Delivered Hot</title>',
    '<title>La Papa\'s Pizza | Fresh Handcrafted Pizzas Delivered Hot</title>'
)
full_html = full_html.replace(
    '<i class="fas fa-fire"></i>\n                <span>Fire<span class="highlight">Crust</span></span>',
    '<i class="fas fa-pizza-slice"></i>\n                <span>La Papa\'s <span class="highlight">Pizza</span></span>'
)

categories_old = """            <!-- Menu Categories -->
            <div class="menu-categories">
                <button class="category-btn active" data-category="all">
                    <span class="cat-icon">🍕</span> All
                </button>
                <button class="category-btn" data-category="veg">
                    <span class="cat-icon">🟢</span> Veg Pizza
                </button>
                <button class="category-btn" data-category="nonveg">
                    <span class="cat-icon">🔴</span> Non-Veg Pizza
                </button>
                <button class="category-btn" data-category="premium">
                    <span class="cat-icon">👑</span> Premium
                </button>
                <button class="category-btn" data-category="sides">
                    <span class="cat-icon">🍟</span> Sides
                </button>
                <button class="category-btn" data-category="drinks">
                    <span class="cat-icon">🥤</span> Drinks
                </button>
                <button class="category-btn" data-category="desserts">
                    <span class="cat-icon">🍰</span> Desserts
                </button>
            </div>

            <!-- Size Filter -->
            <div class="size-filter">
                <button class="size-btn active" data-size="medium">Medium</button>
                <button class="size-btn" data-size="large">Large</button>
                <button class="size-btn" data-size="xl">Extra Large</button>
            </div>"""

categories_new = """            <!-- Menu Categories -->
            <div class="menu-categories">
                <button class="category-btn active" data-category="all">
                    <span class="cat-icon">🍕</span> All
                </button>
                <button class="category-btn" data-category="veg">
                    <span class="cat-icon">🟢</span> Veg Pizza
                </button>
                <button class="category-btn" data-category="nonveg">
                    <span class="cat-icon">🔴</span> Non-Veg Pizza
                </button>
                <button class="category-btn" data-category="burgers">
                    <span class="cat-icon">🍔</span> Burgers
                </button>
                <button class="category-btn" data-category="sides">
                    <span class="cat-icon">🍟</span> Sides
                </button>
                <button class="category-btn" data-category="pasta">
                    <span class="cat-icon">🍝</span> Pasta
                </button>
                <button class="category-btn" data-category="drinks">
                    <span class="cat-icon">🥤</span> Drinks
                </button>
                <button class="category-btn" data-category="desserts">
                    <span class="cat-icon">🍰</span> Desserts
                </button>
            </div>

            <!-- Size Filter -->
            <div class="size-filter">
                <button class="size-btn" data-size="small">Small</button>
                <button class="size-btn active" data-size="medium">Medium</button>
                <button class="size-btn" data-size="large">Large</button>
            </div>"""

full_html = full_html.replace(categories_old, categories_new)
full_html = full_html.replace(
    'Founded in 2018, FireCrust Pizza started with a simple mission',
    'Founded in 2018, La Papa\'s Pizza started with a simple mission'
)
full_html = full_html.replace(
    '<input type="text" id="orderIdInput" placeholder="Enter your Order ID (e.g., FC12345)">',
    '<input type="text" id="orderIdInput" placeholder="Enter your Order ID (e.g., LP12345)">'
)
full_html = full_html.replace(
    'order@firecrust.com<br>support@firecrust.com',
    'order@lapapaspizza.com<br>support@lapapaspizza.com'
)
full_html = full_html.replace(
    '&copy; 2026 FireCrust Pizza. All rights reserved. Made with ❤️ and 🍕',
    '&copy; 2026 La Papa\'s Pizza. All rights reserved. Made with ❤️ and 🍕'
)

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(full_html)

print("index.html restored successfully!")
