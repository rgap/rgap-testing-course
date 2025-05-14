/**
 * 🧪 PURPOSE:
 *   Generate realistic fake user data for test cases and UI rendering.
 *   Useful for mocking frontend form data, seeding development databases, or testing API behavior
 *   without needing real users or confidential data.
 *
 * 📜 HISTORICAL CONTEXT:
 *   - Fake data generation became common in software testing during the rise of agile and CI/CD.
 *   - In 2007, the Ruby community created the `faker` gem to make fake yet realistic names, addresses, etc.
 *   - A JavaScript port called `Faker.js` emerged around 2010 and became popular in full-stack JavaScript apps.
 *   - In 2022, the author of `faker` deleted the package from NPM, which broke builds globally.
 *   - The community responded by forking and maintaining it under the name `@faker-js/faker`.
 *   - The new version supports ES Modules, TypeScript, and multilingual locales.
 *
 * 🔍 THEORETICAL NOTES:
 *   - Fake data helps test **form validation**, **pagination**, **email logic**, **UI rendering**, etc.
 *   - Seeding (faker.seed(n)) makes outputs reproducible—crucial for debugging failing tests.
 *   - Fake data differs from purely random data because it mimics real-world structure (e.g., valid emails).
 *   - Using fake data is safer and more predictable than using production data or scraping.
 *
 */

import { faker } from "@faker-js/faker";

// 🎲 Optional: Seed for reproducible results in tests and snapshots
faker.seed(123);

// 🧪 Generate a fake user object
const fakeUser = {
  id: faker.string.uuid(), // Unique identifier (UUIDv4)
  name: faker.person.fullName(), // Random full name, respecting locale rules
  email: faker.internet.email(), // Valid email address format
  phone: faker.phone.number(), // Phone number pattern depending on locale
  jobTitle: faker.person.jobTitle(), // Profession or role, useful for HR or CRM UIs
  createdAt: faker.date.past().toISOString(), // ISO string of a past date, for creation timestamps
};

// 📤 Output for test seeding or mocking API response
console.log("✅ FAKE USER FOR TESTING PURPOSES:");
console.log(fakeUser);
