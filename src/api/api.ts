const BASE_URL = "https://api.github.com/users";
const ERROR_CODES = ["5", "4"];

export async function fetchUser(searchQuery: string) {
  if (!searchQuery) return;

  const userData = await fetch(`${BASE_URL}/${searchQuery}`);

  if (ERROR_CODES.includes(userData?.status?.toString()?.[0])) {
    return null;
  }

  return userData.json();
}
