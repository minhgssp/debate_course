# PRD: Đưa dự án lên GitHub và sẵn sàng deploy Vercel

## 1) Tình hình hiện tại
- Dự án là static site gồm `index.html`, `script.js`, `style.css` trong thư mục `public/`.
- Tài liệu đã chuẩn hóa theo `DOC/Doing`.
- Đã có cấu hình Vercel qua `vercel.json`.
- Đã có hướng dẫn triển khai trong `README.md`.

## 2) Vấn đề
- Không thể deploy nhanh lên Vercel vì chưa có cấu hình chuẩn.
- Cấu trúc thư mục chưa rõ ràng cho việc mở rộng/duy trì.
- Thiếu tài liệu về quy trình triển khai và tiêu chí hoàn thành.

## 3) Mục tiêu (Kỳ vọng)
- Repo chuẩn hóa, dễ hiểu, sẵn sàng deploy Vercel.
- Có cấu hình Vercel tối thiểu.
- Có README hướng dẫn setup và deploy.
- Có quy ước folder rõ ràng.

## 4) Out of scope (chưa làm)
- Chưa thêm backend hay framework.
- Chưa tối ưu SEO/performance chuyên sâu.
- Chưa thêm CI/CD tự động ngoài Vercel.

## 5) Đối tượng liên quan
- Owner repo / người duyệt PRD và Solution Design.
- Người deploy (Vercel) và người quản trị GitHub.

## 6) Định nghĩa hoàn thành (DoD)
- Repo có cấu trúc folder mới và không làm hỏng website hiện tại.
- Vercel deploy thành công từ GitHub với `index.html` hiển thị đúng.
- Có `vercel.json` hoặc cấu trúc zero-config rõ ràng.
- README cập nhật hướng dẫn deploy.
- Changelog và roadmap được cập nhật sau khi hoàn tất.

## 7) Rủi ro chính
- Thay đổi cấu trúc folder làm hỏng đường dẫn asset.
- Vercel không nhận đúng output directory.
- Quy trình GitHub/Vercel bị lệch quyền truy cập.

## 8) Hướng tiếp cận (2 phương án)
### Phương án A: Đưa `website/` lên root
- Ưu: Vercel zero-config, đơn giản, ít cấu hình.
- Nhược: Các file tài liệu phải dồn vào thư mục `docs/` riêng.

### Phương án B: Giữ `website/` làm output
- Ưu: Phân tách tài liệu và mã nguồn rõ ràng.
- Nhược: Cần `vercel.json` để trỏ output directory.

## 8.1) Phương án được chọn
- Chọn **Phương án B** (giữ `public/` làm output, đã có `vercel.json`).

## 9) Tiêu chí lựa chọn phương án
- Ưu tiên ít rủi ro và triển khai nhanh.
- Không phá vỡ đường dẫn asset hiện có.

## 10) Yêu cầu xác nhận
- Cần xác nhận phương án trước khi triển khai (Bước 5).
