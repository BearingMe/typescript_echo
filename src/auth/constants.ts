import path from "path";

export const SESSION_FILE_NAME: string = "session.json";

export const SESSION_FILE_PATH: string = path.join(__dirname, SESSION_FILE_NAME);

export const PUPPETEER_OPTIONS = {
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  headless: true,
};
