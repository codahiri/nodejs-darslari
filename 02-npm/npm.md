`npm publish` orqali paketimizni repozitoryga yuklaymiz

```bash
npm version major # 1.0.0 ~ 2.0.0
npm version minor # 2.0.0 ~ 2.1.0
npm version patch # 2.1.0 ~ 2.1.1
```

---

- `major` versiya qachonki eski fayllarning ichki tuzilishi o'zgartirilsa yangilanadi
- `minor` versiya paketga yangi fayl qo'shilganda yangilanadi
- `patch` versiya paketimizdagi biror xatoni tuzatganimizda ko'tariladi

  > Versiya yangilangandan so'ng `npm publish` buyrug'ini berishimiz kerak
