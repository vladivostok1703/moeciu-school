import { supabase } from "../../../../lib/supabaseClient";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { error: "All fields are required" }
  }

  const { error } = await supabase.from("Contacts").insert({ name, email, message })

  if (error) {
    console.error("Error inserting contact:", error)
    return { error: "Failed to submit the form. Please try again." }
  }

  return { success: "Your message has been sent successfully!" }
}

