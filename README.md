# Bizim Hikayemiz

Sevgilinle birlikte fotoğraflı, kronolojik hikaye sayfası. React ile yazıldı, GitHub Pages’te yayınlanabilir.

## Özellikler

- **Üst bölüm:** Fotoğrafların otomatik döndüğü animasyonlu galeri, yan tarafta küçük fotoğraflar
- **Alt bölüm:** Kronolojik timeline — tarih, başlık, kısa metin ve fotoğraf

## Veriyi düzenleme

Tüm içerik `src/data/timelineData.js` dosyasında:

- **timelineEvents:** Her bir objede `date`, `title`, `description`, `image` var. Sırayı değiştirerek veya yeni obje ekleyerek kronolojiyi güncelle.
- **Kendi fotoğrafların:** Görselleri `public/photos/` klasörüne koy (örn. `tanisma.jpg`). Data’da `image: '/photos/tanisama.jpg'` şeklinde kullan.

Şu an örnek olarak placeholder görseller kullanılıyor; kendi fotoğraflarını ekleyince onlar görünür.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:5173 açılır.

## GitHub Pages’e canlı alma

1. **GitHub’da yeni repo oluştur** (örn. adı `bizim-hikaye` veya `github`). “Add a README” seçme.
2. **Projeyi GitHub’a bağla ve push et:**
   ```bash
   cd c:\Users\baran\projeler\github
   git init
   git add .
   git commit -m "İlk commit"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADIN/repo-adi.git
   git push -u origin main
   ```
   `KULLANICI_ADIN` ve `repo-adi` yerine kendi kullanıcı adın ve repo adını yaz.
3. **Pages’i aç:** Repo sayfasında **Settings → Pages**. “Build and deployment” bölümünde **Source:** **GitHub Actions** seç.
4. **İlk deploy:** Zaten `main`’e push ettiysen “Actions” sekmesinde workflow çalışır. Bittiğinde sayfa yayında olur.
5. **Canlı adres:** `https://KULLANICI_ADIN.github.io/repo-adi/`  
   Repo adın `github` ise: `https://KULLANICI_ADIN.github.io/github/`

**Önemli:** Repo adı `github` değilse `vite.config.js` içinde `'/github/'` yazan yeri `'/repo-adi/'` yap (repo adınla değiştir).
