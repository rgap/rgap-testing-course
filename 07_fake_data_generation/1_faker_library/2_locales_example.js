/**
 * 🧪 PURPOSE:
 *   Demonstrates how to use locale support in `@faker-js/faker` to generate
 *   culturally and linguistically accurate fake data for international testing.
 *
 * 📜 HISTORICAL CONTEXT:
 *   - Early fake data libraries (like Ruby's `faker`) only supported English.
 *   - As global apps became more common, developers needed fake names and addresses
 *     that match real-world formats across languages and regions.
 *   - The original `faker.js` had some locale support but was not actively maintained.
 *   - The modern fork `@faker-js/faker` fully supports 50+ locales (as of 2024), including:
 *     Spanish (es), Japanese (ja), French (fr), Arabic (ar), and many more.
 *
 * 🔍 THEORETICAL NOTES:
 *   - Locale-specific testing ensures apps work with international characters (ñ, ç, è).
 *   - Important for UX, encoding, database collation, input validation, and RTL layout support.
 *   - Multilingual testing helps avoid bugs like:
 *     - text overflow in UI (long names),
 *     - incorrect currency/phone formats,
 *     - encoding issues (UTF-8 vs ASCII),
 *     - broken search/filter logic in localized apps.
 *
 * ✅ GOOD PRACTICE:
 *   - Always test apps with diverse input, especially if targeting multiple regions.
 *   - Simulate users with names, addresses, and companies in the target locale.
 *   - Use locale data in end-to-end tests to reflect real user experience.
 */

import { Faker, es } from "@faker-js/faker"; // Import Spanish locale

// 📦 Create a faker instance configured for Spanish
const fakerES = new Faker({ locale: [es] });

// 🧪 Simulate a user with Spanish-localized fake data
const usuario = {
  nombre: fakerES.person.fullName(), // Ej: "Carlos Gómez"
  direccion: fakerES.location.streetAddress(), // Ej: "Calle Falsa 123"
  ciudad: fakerES.location.city(), // Ej: "Madrid"
  pais: fakerES.location.country(), // Ej: "España"
  empresa: fakerES.company.name(), // Ej: "Soluciones Innovadoras S.A."
};

// 📤 Output the localized fake data
console.log("🌐 USUARIO FALSO PARA PRUEBAS MULTILINGÜES:");
console.log(usuario);
