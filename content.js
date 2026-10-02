/* ==========================================================================
   YOUR CONTENT — the only file you need to edit.

   How to fill it:
   • Paste a link between the quotes: "https://youtu.be/xxxx"
   • Works with YouTube (normal, Shorts, youtu.be), Aparat, Instagram,
     or a video file in your folder like "video/reel.mp4"
   • Leave "" empty and the site shows a clean "coming soon" frame.
   • "cover" is optional. YouTube covers load automatically.
     For Aparat / Instagram / mp4, add an image like "video/cover1.jpg".
   ========================================================================== */

window.SITE = {

  // ---- Contact -----------------------------------------------------------
  email:     "",   // hello@yourname.com
  instagram: "https://www.instagram.com/mehdi.mediax",
  linkedin:  "",   // https://linkedin.com/in/yourname
  tiktok:    "https://www.tiktok.com/@mehdi.mediax",
  x:         "https://x.com/mehdimediax7",
  whatsapp:  "https://wa.me/12137617085?text=Hi%20Mehdi%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
  youtube:   "",   // https://youtube.com/@yourname

  // ---- Hero --------------------------------------------------------------
  showreel:     "",   // link to your showreel (vertical 9:16, e.g. a YouTube Short)
  showreelLoop: "",   // optional: short silent .mp4 that loops in the hero

  // ---- Presentation ------------------------------------------------------
  intro: "",          // link to the horizontal video where you talk to camera
  photo: "",          // your portrait for the About section, e.g. "images/me.jpg"

  // Chapter 01 · For businesses (3 vertical videos)
  chapter1: [
    { link: "", title: "", client: "", note: "", cover: "" },
    { link: "", title: "", client: "", note: "", cover: "" },
    { link: "", title: "", client: "", note: "", cover: "" },
  ],

  // Chapter 02 · For podcasters (3 vertical videos)
  chapter2: [
    { link: "video/know-your-why.mp4", title: "Know Your Why", client: "Jon Orsini · Mindfulness Unscripted", note: "Podcast clip with kinetic captions, halftone B-roll and motion graphics.", cover: "video/know-your-why.jpg" },
    { link: "", title: "", client: "", note: "", cover: "" },
    { link: "", title: "", client: "", note: "", cover: "" },
  ],

  // ---- More work (Google Drive folders) --------------------------------
  // Paste a Drive folder link. Set sharing to "Anyone with the link can view".
  moreWork: [
    { link: "", title: "Business videos", note: "Talking-head videos for product and service brands" },
    { link: "", title: "Podcast clips",   note: "Short clips cut from full episodes" },
    { link: "", title: "All edits",       note: "The complete library" },
  ],

  // ---- Clients ("Worked with") ------------------------------------------
  clients: [
    { name: "Jon Orsini", show: "Mindfulness Unscripted", role: "Podcast host · Meditation teacher",
      photo: "video/jon-orsini.jpg",
      youtube: "https://www.youtube.com/channel/UCY6uEEBVRRrIvMaPMWlljrw",
      instagram: "https://www.instagram.com/jonorsini/" },
  ],

  // ---- Client feedback ---------------------------------------------------
  // Hidden while empty. Add real ones later like this:
  // { quote: "Mehdi made our clips...", name: "Jane Doe", role: "Founder, Brand" },
  testimonials: [
  ],
};
