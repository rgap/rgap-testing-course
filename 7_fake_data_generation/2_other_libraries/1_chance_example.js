/**
 * 🧪 PURPOSE:
 *   Demonstrate use of the `chance` library — a compact, powerful alternative to Faker.
 *
 * 📜 HISTORICAL CONTEXT:
 *   - Created by Victor Quinn in 2013
 *   - Inspired by functional programming and entropy sources
 *   - Offers compact, functional, and chainable API
 *   - Suitable for test cases, security simulations, and quick randomness
 *
 * 🔍 THEORETICAL NOTES:
 *   - `chance` is *less verbose* and *more mathematical* than Faker
 *   - You can create random floating-point numbers, names, emails, geocoordinates, etc.
 *   - Good for minimal apps, security fuzzing, or pure JS apps
 */

import Chance from "chance";

const chance = new Chance(); // Can use .seed()

const fakeUser = {
  id: chance.guid(),
  name: chance.name(),
  email: chance.email(),
  age: chance.age({ type: "adult" }),
  country: chance.country({ full: true }),
};

console.log("🔢 Chance-generated fake user:");
console.log(fakeUser);
