<?php
/**
 * Power of Markets (POM) Theme Functions
 * Theme Name: Power of Markets Theme
 * Author: Power of Markets Engineering & Abhishek Upadhyay
 * Version: 1.0.0
 * Text Domain: pom-theme
 */

if (!defined('ABSPATH')) exit;

/**
 * 1. Theme Setup
 */
function pom_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');

    register_nav_menus([
        'primary-menu' => __('Primary Header Navigation', 'pom-theme'),
        'footer-menu'  => __('Footer Navigation', 'pom-theme'),
        'legal-menu'   => __('Legal Policies Menu', 'pom-theme'),
    ]);
}
add_action('after_setup_theme', 'pom_theme_setup');

/**
 * 2. Enqueue Scripts & Google Fonts
 */
function pom_enqueue_assets() {
    wp_enqueue_style(
        'pom-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap',
        [],
        null
    );

    wp_enqueue_style('pom-style', get_stylesheet_uri(), [], '1.0.0');
}
add_action('wp_enqueue_scripts', 'pom_enqueue_assets');

/**
 * 3. Register Custom Post Types: Courses, Webinars, Team, Careers
 */
function pom_register_custom_post_types() {
    // 3.1 Courses CPT
    register_post_type('pom_course', [
        'labels' => [
            'name'               => __('Courses', 'pom-theme'),
            'singular_name'      => __('Course', 'pom-theme'),
            'add_new'            => __('Add New Course', 'pom-theme'),
            'add_new_item'       => __('Add New Market Course', 'pom-theme'),
            'edit_item'          => __('Edit Course', 'pom-theme'),
        ],
        'public'             => true,
        'has_archive'        => true,
        'rewrite'            => ['slug' => 'courses'],
        'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest'       => true,
        'menu_icon'          => 'dashicons-welcome-learn-more',
    ]);

    // Course Category Taxonomy
    register_taxonomy('course_category', ['pom_course'], [
        'labels'             => [
            'name'          => __('Course Categories', 'pom-theme'),
            'singular_name' => __('Course Category', 'pom-theme'),
        ],
        'hierarchical'       => true,
        'show_in_rest'       => true,
        'rewrite'            => ['slug' => 'course-category'],
    ]);

    // 3.2 Webinars CPT
    register_post_type('pom_webinar', [
        'labels' => [
            'name'          => __('Webinars', 'pom-theme'),
            'singular_name' => __('Webinar', 'pom-theme'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'webinars'],
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-video-alt3',
    ]);

    // 3.3 Careers / Job Openings CPT
    register_post_type('pom_career', [
        'labels' => [
            'name'          => __('Careers', 'pom-theme'),
            'singular_name' => __('Career Opening', 'pom-theme'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'rewrite'      => ['slug' => 'careers'],
        'supports'     => ['title', 'editor', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-id-alt',
    ]);
}
add_action('init', 'pom_register_custom_post_types');

/**
 * 4. Graphy LMS Webhook Receiver & Single Sign-On (SSO) Bridge
 */
add_action('rest_api_init', function () {
    register_rest_route('pom/v1', '/graphy-webhook', [
        'methods'             => 'POST',
        'callback'            => 'pom_handle_graphy_webhook',
        'permission_callback' => '__return_true',
    ]);
});

function pom_handle_graphy_webhook($request) {
    $payload = $request->get_json_params();
    $event = sanitize_text_field($payload['event'] ?? '');
    $email = sanitize_email($payload['user']['email'] ?? '');

    if (empty($email)) {
        return new WP_REST_Response(['status' => 'error', 'message' => 'Missing email'], 400);
    }

    if ($event === 'course.enrolled') {
        $user = get_user_by('email', $email);
        if ($user) {
            $course_id = sanitize_text_field($payload['course']['id'] ?? 'option-greeks');
            update_user_meta($user->ID, 'pom_enrolled_' . $course_id, current_time('mysql'));
        }
    }

    return new WP_REST_Response(['status' => 'success', 'processed' => true], 200);
}
