export default function getFormattedDateTime(): string {
    const now: Date = new Date();
  
    // Get date components
    const day: string = String(now.getDate()).padStart(2, '0'); // DD
    const month: string = String(now.getMonth() + 1).padStart(2, '0'); // MM (months are 0-based)
    const year: string = String(now.getFullYear()).slice(-2); // YY (last two digits of the year)
  
    // Get time components
    let hours: number = now.getHours(); // 24-hour format
    const minutes: string = String(now.getMinutes()).padStart(2, '0'); // MM
    const ampm: string = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
  
    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const formattedHours: string = String(hours).padStart(2, '0'); // Ensure two digits
  
    // Combine into the desired format
    const formattedDate: string = `${day}/${month}/${year}`;
    const formattedTime: string = `${formattedHours}:${minutes} ${ampm}`;
  
    return `${formattedDate} ${formattedTime}`;
  }
  