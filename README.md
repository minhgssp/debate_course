# Debate Course

Static site phục vụ nội dung khóa học tranh biện.

## Cấu trúc thư mục
- `public/`: Website static (`index.html`, `script.js`, `style.css`)
- `DOC/Doing/`: Tài liệu PRD và Solution Design đang thực hiện
- `DOC/Reference/`: Tài liệu tham khảo (PDF, nội dung học thuật)

## Chạy local
Mở trực tiếp `public/index.html` bằng trình duyệt.

## Deploy Vercel
1. Push repo lên GitHub (xem mục bên dưới).
2. Vercel → New Project → Import GitHub repo.
3. Framework Preset: **Other**.
4. Build Command: **None**.
5. Output Directory: **Leave empty** (đã cấu hình qua `vercel.json`).
6. Deploy.

## Đưa dự án lên GitHub (gợi ý)
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
