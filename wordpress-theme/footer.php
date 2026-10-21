<?php
/**
 * Footer Template for Power of Markets Theme
 */
?>
<footer class="site-footer bg-[#071F49] text-white pt-16 pb-12 mt-20 border-t border-[#0AA8EF]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
      
      <div class="md:col-span-2">
        <h3 class="text-xl font-extrabold text-white">POWER OF MARKETS (POM)</h3>
        <p className="text-xs text-[#DCEAF8]/80 max-w-sm mt-2 leading-relaxed">
          360° financial market education. Founded by Abhishek Upadhyay, teaching mathematical Option Greeks, systematic risk containment, and institutional market structure.
        </p>
      </div>

      <div>
        <h4 class="text-xs font-mono font-bold uppercase text-[#0AA8EF] mb-3">Programs</h4>
        <ul class="space-y-2 text-xs text-[#DCEAF8]/80">
          <li><a href="<?php echo esc_url(home_url('/courses/')); ?>" class="hover:text-white">Option Greeks Masterclass</a></li>
          <li><a href="<?php echo esc_url(home_url('/courses/')); ?>" class="hover:text-white">Market Structure & Price Action</a></li>
          <li><a href="<?php echo esc_url(home_url('/webinars/')); ?>" class="hover:text-white">Upcoming Live Webinars</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-xs font-mono font-bold uppercase text-[#0AA8EF] mb-3">Direct Contact</h4>
        <p class="text-xs text-[#DCEAF8]/80 leading-relaxed">
          Sector 62, Institutional Area, Noida, UP 201309<br/>
          support@powerofmarket.com<br/>
          +91 98112 04510
        </p>
      </div>

    </div>

    <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DCEAF8]/60 font-mono">
      <p>© <?php echo date('Y'); ?> Power of Markets. All rights reserved.</p>
      <p>SEBI Educational Awareness Compliant</p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
