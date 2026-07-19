# Project Context

## Site
- Missionary pilot blog at https://www.annajohnson.org
- Static HTML with Bootstrap 5.3.3, no frameworks
- Custom CSS in assets/css/style.css

## Images
- Stored in assets/img/
- Process HEIC with: `sips -s format jpeg -s dpiHeight 72 -s dpiWidth 72 --resampleHeightWidthMax 3000`
- Originals stashed in upload/originals/ after processing
- Card images: object-fit cover, object-position center top

## Category Badge Colors
- General = bg-secondary (grey)
- Flight Training = .badge-flight-training (green)
- Maintenance Training = .badge-maintenance-training (blue)
- Personal = .badge-personal (light pink)

## Structure
- Blog posts in blog/YYYY/slug/ with index.html
- Pages: about/, contact/, blog/ (all with index.html)
- Three most recent posts on homepage, all posts on blog/ newest-first
- Tests: Playwright via `npm test`

## Git
- Remote: https://github.com/annaamore/missionarypilotmechanic.git
- .gitignore ignores node_modules/, .DS_Store, test-results/
