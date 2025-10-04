# AutoFlow - Strona Automatyzacji Procesów Biznesowych

Nowoczesna strona internetowa w stylu digitalnie.pl, skupiona na automatyzacji procesów w firmach.

## 🚀 Funkcjonalności

- **Responsywny design** - działa na wszystkich urządzeniach
- **Nowoczesne animacje** - płynne przejścia i efekty scroll
- **Interaktywny formularz kontaktowy** - z walidacją i powiadomieniami
- **Sekcje tematyczne**:
  - Hero z animowanym procesem automatyzacji
  - Usługi automatyzacji (6 głównych kategorii)
  - Portfolio realizacji
  - Opinie klientów
  - Blog/artykuły
  - Formularz kontaktowy

## 📁 Struktura plików

```
strona/
├── index.html          # Główna strona HTML
├── styles.css          # Stylowanie CSS
├── script.js           # Funkcjonalność JavaScript
└── README.md          # Ten plik
```

## 🛠️ Technologie

- **HTML5** - semantyczna struktura
- **CSS3** - nowoczesne stylowanie z gradientami i animacjami
- **JavaScript (Vanilla)** - interaktywność bez zewnętrznych bibliotek
- **Font Awesome** - ikony
- **Google Fonts (Inter)** - typografia

## 🎨 Design

Strona inspirowana jest designem digitalnie.pl i zawiera:
- Gradient backgrounds i blob animations
- Nowoczesną paletę kolorów (niebiesko-fioletowe gradienty)
- Responsywny layout z CSS Grid i Flexbox
- Smooth scrolling i intersection observer animations
- Mobile-first approach

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowana do:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (do 767px)

## 🔧 Uruchomienie

1. **Pobierz pliki** do lokalnego folderu
2. **Otwórz `index.html`** w przeglądarce internetowej
3. **Gotowe!** - strona działa lokalnie

### Opcjonalnie - serwer lokalny:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (jeśli masz zainstalowany)
npx serve .
```

Następnie otwórz `http://localhost:8000` w przeglądarce.

## 📧 Formularz kontaktowy

Formularz zawiera:
- Walidację pól wymaganych
- Sprawdzanie poprawności e-maila
- System powiadomień (success/error)
- Responsywny design

**Uwaga**: Obecnie formularz działa w trybie demo. Aby podłączyć prawdziwe wysyłanie e-maili, należy:
1. Dodać backend API (Node.js, PHP, Python, etc.)
2. Zmodyfikować funkcję `contactForm.addEventListener` w `script.js`
3. Podłączyć usługę e-mail (SendGrid, Mailgun, etc.)

## 🎯 Sekcje biznesowe

### Usługi automatyzacji:
1. **Automatyzacja Procesów** - RPA, workflow automation
2. **Integracja Systemów** - API, CRM, ERP connectivity
3. **Analityka i Raportowanie** - dashboardy, BI
4. **Chatboty i AI** - customer service automation
5. **Automatyzacja w Chmurze** - cloud solutions
6. **Bezpieczeństwo** - compliance, monitoring

### Portfolio przykładów:
- E-commerce Plus (automatyzacja e-commerce)
- MedFlow (procesy medyczne)
- CorpAuto (HR i księgowość)

## 🔄 Animacje

- **Hero section**: Animowany proces automatyzacji (Start → Automatyzacja → Rezultat)
- **Scroll animations**: Fade-in, slide-in effects
- **Hover effects**: Transform, shadow, color transitions
- **Counter animations**: Statystyki z efektem liczenia
- **Parallax**: Subtelny efekt na blob elements

## 📊 Statystyki (przykładowe)

- 70% redukcja czasu pracy
- 95% mniej błędów
- 24/7 dostępność systemów

## 🎨 Kolory

```css
/* Główne gradienty */
Primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
Accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)

/* Kolory tekstu */
Dark: #333333
Medium: #666666
Light: #999999
```

## 📞 Kontakt

Formularz kontaktowy zawiera pola:
- Imię (wymagane)
- E-mail (wymagane, z walidacją)
- Nazwa firmy (opcjonalne)
- Rodzaj usługi (select, wymagane)
- Wiadomość (wymagane)

## 🚀 Dalszy rozwój

Możliwe rozszerzenia:
- Backend dla formularza kontaktowego
- CMS dla treści bloga
- System rezerwacji konsultacji
- Integracja z Google Analytics
- SEO optimization
- Testy A/B
- Wielojęzyczność

## 📄 Licencja

Projekt stworzony na potrzeby prezentacji usług automatyzacji procesów biznesowych.

---

**Autor**: AutoFlow Team
**Data**: 2025
**Wersja**: 1.0
