# Frontend PEAK assignment

แบบทดสอบสำหรับ ผู้สมัครตำแหน่ง Software Engineer, Frontend การทำแบบทดสอบผู้สมัครจะต้องคำนึกถึงข้อกำหนดที่กล่าวไว้ด้านล่างเสมอ

### ข้อกำหนดในการทำแบบทดสอบ

code ที่เขียนออกมาต้องคำนึกด้วยว่าเราไม่ได้ทำงานคนเดียว code ของเราคนอื่นต้องสามารถทำงานต่อได้ง่าย อ่านเข้าใจและชัดเจนการทำงาน

web application ที่ทำออกมาต้องง่ายต่อผู้ใช้ง่าย ออกแบบประสบการณ์การใช้งานที่ดีให้กับผู้ที่มาใช้ user experience (UX)

## แบบทดสอบ "E-Commerce web application"

สร้าง web application สำหรับแสดงรายการสินค้าและเลือกสินค้าเข้าตะกร้า

### Requirements

1. เชื่อมต่อ api ที่เตรียมใว้เพื่อดึงข้อมูลรายการสินค้ามาแสดง

#### ตัวอย่าง Response api

```
GET /api/products

Response Status 200:
{
    "products": [
    {
      "id": 1,
      "title": "Product Name 1",
      "description": "Lorem Ipsum is simply dummy text of ...",
      "photos": [
        "https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png"
      ],
      "price": 1000,
      "tags": ["tag2", "tag1", "tag4"]
    },
    {
      "id": 2,
      "title": "Product Name 2",
      "description": "Lorem Ipsum is simply dummy text of ...",
      "photos": [
        "https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png"
      ],
      "price": 1000,
      "tags": ["tag1", "tag4", "tag2"]
    },
}
```

2. สร้างหน้าแสดงรายการสินค้า (productList page) ที่รับมาจาก api ที่แสดงรูป ชื่อ tags ของสินค้า
3. ในรายการสินค้าสามารถกดเข้าไปดูรายละเอียดของสินค้า (detail page) ได้จะแสดง description ของสินค้าเพิ่มขึ้น
4. สามารถกดนำสินค้าเข้าตะกร้าสินค้าได้ และมีปุ่มเพื่อไปดูหน้าตะกร้าสินค้า (crat page) ที่แสดงรายการที่เราเลือกมาทั้งหมด และสามารถกดลบออกจากตะกร้าสินค้า

## Vue Web Application

การสร้าง Web Application ใช้ vue 2 typescript ในการสร้างขึ้นมา เราจะดูการเขียน service เพื่อเชื่อมต่อ api สำหรับดึงข้อมูบ การจัดการข้อมูลใน Web Application ที่เป็นระเบียบการอ่าน (ควรใช้ vuex ที่ติดตั้งไปให้ใน project) และการสร้าง,ใช้ component ที่นำมาใช้ใหม่ได้เพื่อไม่ให้ code มีการซ้ำซ้อนกัน

## วิธีการ Run Service API

```bash
cd .\json-server\
```

```bash
npm install
```

```bash
node index.js
```

ดูข้อมูล json ได้ที่ http://localhost:3000/

## วิธีการ Run Wab Appication

```bash
cd .\webapp\
```

```bash
npm install
```

```bash
npm run serve
```

Wab Appication จะ run อยู่ที่ http://localhost:8080/
