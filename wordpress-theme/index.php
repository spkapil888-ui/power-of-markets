<?php
/**
 * Main Template File
 */
get_header(); ?>

<main id="primary" class="site-main max-w-7xl mx-auto px-4 py-12">
  <div class="mb-10 text-left">
    <h1 class="text-3xl font-extrabold text-[#071F49]"><?php single_post_title(); ?></h1>
  </div>

  <?php if (have_posts()) : ?>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white p-6 rounded-2xl border border-[#DCEAF8] flex flex-col justify-between'); ?>>
          <div>
            <h2 class="text-lg font-bold text-[#071F49] mb-2">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h2>
            <div class="text-xs text-[#61748D] line-clamp-3 mb-4">
              <?php the_excerpt(); ?>
            </div>
          </div>
          <div class="pt-4 border-t border-[#EEF6FF] flex items-center justify-between text-xs font-mono text-[#0767DF]">
            <span><?php echo get_the_date(); ?></span>
            <a href="<?php the_permalink(); ?>" class="font-bold">Read More →</a>
          </div>
        </article>
      <?php endwhile; ?>
    </div>
  <?php else : ?>
    <p class="text-sm text-[#61748D]">No content found.</p>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
