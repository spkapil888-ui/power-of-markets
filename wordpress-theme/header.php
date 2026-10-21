<?php
/**
 * Header Template for Power of Markets Theme
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
</head>
<body <?php body_class('bg-[#EEF6FF] text-[#081B3A] antialiased'); ?>>
<?php wp_body_open(); ?>

<header class="site-header sticky top-0 z-50 px-4 py-3">
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-8 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/80 shadow-xs">
    
    <!-- Brand -->
    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2">
      <span class="text-xl font-extrabold text-[#071F49] tracking-tight">POWER OF MARKETS</span>
      <span class="text-[10px] font-mono font-bold bg-[#DCEAF8] text-[#0767DF] px-1.5 py-0.5 rounded">POM</span>
    </a>

    <!-- Nav -->
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-[#61748D]">
      <?php
      wp_nav_menu([
          'theme_location' => 'primary-menu',
          'container'      => false,
          'fallback_cb'    => false,
          'items_wrap'     => '%3$s',
      ]);
      ?>
    </nav>

    <!-- CTA -->
    <div class="flex items-center gap-3">
      <a href="<?php echo esc_url(home_url('/courses/')); ?>" class="px-4 py-2 bg-[#0767DF] text-white text-xs font-semibold rounded-xl hover:bg-[#0654b7]">
        Explore Courses
      </a>
    </div>

  </div>
</header>
