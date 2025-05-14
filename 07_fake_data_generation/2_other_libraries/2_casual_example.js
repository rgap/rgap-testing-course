/**
 * 🧪 PURPOSE:
 *   Show how `casual` can be used to quickly mock data with predefined generators.
 *
 * 📜 HISTORICAL CONTEXT:
 *   - Released ~2014 by Denis Rechkunov
 *   - Focused on simplicity and extensibility (custom generators)
 *   - Frequently used in GraphQL and REST mocks
 *
 * 🔍 THEORETICAL NOTES:
 *   - `casual` uses lazy evaluation: fields generate when accessed
 *   - Shorter API than Faker, but fewer options
 *   - You can define your own generators via `casual.define()`
 */

import casual from "casual";

const fakeProfile = {
  id: casual.uuid,
  username: casual.username,
  email: casual.email,
  country: casual.country,
  sentence: casual.sentence,
  createdAt: casual.unix_time,
};

console.log("📦 Casual-generated mock profile:");
console.log(fakeProfile);
