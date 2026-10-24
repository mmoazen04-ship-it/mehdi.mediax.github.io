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
  showreel:     "video/mehdi-intro.mp4",   // link to your showreel (vertical 9:16, e.g. a YouTube Short)
  showreelLoop: "video/mehdi-intro.mp4",   // optional: silent .mp4 that loops in the hero
  showreelCover: "video/mehdi-intro.jpg",  // still image shown before the video loads

  // ---- Presentation ------------------------------------------------------
  intro: "",          // optional: horizontal intro video. Hidden while empty, appears automatically when filled
  photo: "",          // your portrait for the About section, e.g. "images/me.jpg"

  // Chapter 01 · For businesses (3 vertical videos)
  chapter1: [
    { link: "video/seasonal-business.mp4", title: "Seasonal Business", client: "", note: "Talking-head edit with split-screen B-roll, editorial captions and motion graphics.", cover: "video/seasonal-business.jpg" },
    { link: "video/curodont-repair.mp4", title: "Curodont Repair", client: "", note: "Product explainer with metallic titles, 3D icons and a cinematic grade.", cover: "video/curodont-repair.jpg" },
    { link: "video/htc-earbuds.mp4", title: "HTC Smart Earbuds", client: "", note: "UGC product ad with gold editorial titles, glass UI pills and the product placed in cinematic scenes.", cover: "video/htc-earbuds.jpg" },
  ],

  // Chapter 02 · For podcasters (3 vertical videos)
  chapter2: [
    { link: "video/know-your-why.mp4", title: "Know Your Why", client: "Jon Orsini · Mindfulness Unscripted", note: "Podcast clip with kinetic captions, halftone B-roll and motion graphics.", cover: "video/know-your-why.jpg" },
    { link: "video/the-collapse.mp4", title: "The Collapse", client: "", note: "Market commentary with bold kinetic captions and archival B-roll.", cover: "video/the-collapse.jpg" },
    { link: "video/sleepwalking.mp4", title: "Sleepwalking", client: "", note: "Talking-head edit with cinematic B-roll, kinetic typography and motion graphics.", cover: "video/sleepwalking.jpg" },
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
  ],

  // ---- Client feedback ---------------------------------------------------
  // Hidden while empty. Add real ones later like this:
  // { quote: "Mehdi made our clips...", name: "Jane Doe", role: "Founder, Brand" },
  testimonials: [
  ],
};
