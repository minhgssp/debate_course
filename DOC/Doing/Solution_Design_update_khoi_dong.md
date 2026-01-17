# Solution Design: Cập nhật hoạt động "Khởi động" & bổ sung đề bài

## 1) Kiến trúc hiện tại
- Static site, nội dung nằm trong `public/index.html`.
- Giáo án tham chiếu nằm trong `DOC/Reference/Debate_Class_Syllabus.md`.

## 2) Kiến trúc mục tiêu
- Nội dung UI và giáo án đồng bộ tên hoạt động và danh sách đề bài khởi động.
- Không thay đổi cấu trúc layout hoặc logic.

## 3) Thiết kế hướng tiếp cận (theo rule 4.2)
- Micro-service: Không áp dụng (static site).
- Tránh technical debt: Chỉ chỉnh sửa text, không thêm logic mới.
- Dễ debug: Sửa trực tiếp các block nội dung liên quan.

## 4) Phương án
### Phương án A (chọn): Cập nhật trực tiếp HTML + giáo án
- Ưu điểm: Nhanh, ít rủi ro, đúng phạm vi.
- Nhược điểm: Cần sửa tay nếu muốn mở rộng thêm lần sau.

### Phương án B: Tách dữ liệu đề bài ra file JSON
- Ưu điểm: Dễ mở rộng và tái sử dụng.
- Nhược điểm: Phát sinh thêm cấu trúc dữ liệu và JS render, vượt phạm vi.

## 5) Luồng chức năng mới (sau thay đổi)
- Slide "Khởi động" hiển thị tiêu đề mới và 3 đề bài gợi ý.
- Giáo án tham chiếu dùng cùng tên hoạt động và liệt kê đề bài tương ứng.

## 6) Step-by-step plan
1. Cập nhật `public/index.html`:
   - Đổi label menu và tiêu đề slide thành "Khởi động".
   - Bổ sung 2 đề bài mới trong phần khởi động.
2. Cập nhật `DOC/Reference/Debate_Class_Syllabus.md` để đồng bộ.
3. Soát lại UI để đảm bảo không vỡ layout.
4. Cập nhật `Changelog.md` nếu dự án yêu cầu log thay đổi.

## 7) Quản lý rủi ro theo từng bước
- Bước 1: Sai chính tả/HTML entity -> rà soát text sau khi sửa.
- Bước 2: Không đồng bộ -> đối chiếu nội dung giữa slide và giáo án.
- Bước 3: Layout bị tràn -> kiểm tra hiển thị (nếu có thể).

## 8) Checklist cuối cùng
- Menu và tiêu đề slide hiển thị "Khởi động".
- Có đủ 3 đề bài gợi ý trong khởi động.
- Giáo án tham chiếu cập nhật đồng bộ.
