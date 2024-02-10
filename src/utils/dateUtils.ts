export class DateUtils {
  public static getDateJoined(date: Date | undefined): string | undefined {
    if (date) {
      const day = date.getDate();
      const month = date.toLocaleDateString("en-EN", { month: "short" });
      const year = date.getFullYear();
      return `Joined ${day} ${month} ${year}`;
    }
  }
}
