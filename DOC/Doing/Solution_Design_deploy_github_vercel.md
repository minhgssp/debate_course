# Solution Design: Chuẩn hóa repo & deploy Vercel

## 1) Kiến trúc hiện tại
- Static site, không có build step.
- Source nằm trong `public/`.
- Assets được tham chiếu tương đối trong `index.html`.

## 2) Kiến trúc mục tiêu
- Repo có cấu trúc rõ ràng (docs/public).
- Vercel deploy theo cấu trúc đã chọn (public + vercel.json).
- Có tài liệu hướng dẫn deploy và quy trình GitHub.

## 3) Thiết kế hướng tiếp cận (theo rule 4.2)
- Micro-service: Không áp dụng vì đây là static site.
- Tránh technical debt: Ưu tiên cấu trúc tối giản, tách docs khỏi source.
- Dễ debug: Mỗi phần có folder rõ ràng.

## 4) Luồng chức năng mới (sau thay đổi)
1. Dev push code lên GitHub.
2. Vercel connect repo và deploy tự động.
3. Vercel serve static site từ root hoặc output directory cấu hình.

## 5) Step-by-step plan
1. Chuẩn hóa thư mục `DOC/Doing` và viết PRD/Solution Design. (đã làm)
2. Chọn phương án cấu trúc repo (A hoặc B). (đã chọn B)
3. Sắp xếp lại thư mục theo phương án đã chọn. (đã có `public/`)
4. Thêm `vercel.json` (nếu cần). (đã có)
5. Cập nhật `README.md` hướng dẫn deploy. (đã có)
6. Kiểm tra bằng cách mở `index.html` và giả lập deploy (nếu có thể).
7. Cập nhật `Changelog.md` và `roadmap` sau khi hoàn tất.

## 6) Quản lý rủi ro theo từng bước
- Bước 3: kiểm tra lại đường dẫn asset sau khi move file.
- Bước 4: verify Vercel output directory đúng.
- Bước 5: hướng dẫn rõ ràng để tránh deploy sai.

## 7) Checklist cuối cùng
- Repo structure đúng phương án đã chọn.
- Vercel deploy thành công.
- README/Changelog/roadmap cập nhật.
- Không phá vỡ UI hiện có.

## 8) Yêu cầu xác nhận
- Đã chọn phương án B và sẵn sàng triển khai bước deploy GitHub.
