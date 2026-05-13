// supabase config stuff
const supabase_url = 'https://ovjsgpfasqhaiuseqdcv.supabase.co'
const supabase_key = 'sb_publishable_G-xVWk4BgqinikDuOJ0Piw_oVZNNdYL'
const sb = supabase.createClient(supabase_url, supabase_key)

// sates
let currentSort = 'newest'
let searchQuery = ''
let selectedExpiry = null

document.addEventListener('DOMContentLoaded', () => {
    loadPosts()
    loadPostOfTheDay()
    setupComposer()
    setupControls()
    setupThemeToggle()
})