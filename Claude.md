# Claude AI Assistant Guidelines

This document contains guidelines and best practices for AI assistants (like Claude) working on this project.

## Git Workflow

### Branching Strategy

**IMPORTANT**: Always use a branching workflow when making changes to this repository.

#### Rules:

1. **Never commit directly to `main`**: All changes should be made through feature branches and pull requests
2. **Branch naming convention**: Use descriptive names with prefixes:
   - `feature/` - New features or enhancements
   - `fix/` - Bug fixes
   - `docs/` - Documentation updates
   - `refactor/` - Code refactoring
   - `chore/` - Maintenance tasks

   Examples:
   - `feature/add-contact-form`
   - `fix/profile-image-alignment`
   - `docs/update-readme`

3. **Workflow steps**:
   ```bash
   # Create and switch to a new branch
   git checkout -b feature/your-feature-name
   
   # Make your changes and commit
   git add .
   git commit -m "descriptive commit message"
   
   # Push the branch
   git push -u origin feature/your-feature-name
   
   # Create a pull request
   gh pr create --title "Your PR Title" --body "PR description"
   ```

4. **Pull requests**: Always create a PR for code review before merging to main

### Commit Messages

Follow conventional commit format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add dark mode toggle to settings`

**Author**: Always set the commit author to the AI model being used:
```bash
git commit --author="Claude Sonnet <claude-sonnet@anthropic.com>" -m "..."
```

## Project-Specific Notes

- This is an Astro-based personal website hosted on GitHub Pages
- Profile images are stored in `/public/` directory
- Main page is at `src/pages/index.astro`
- **Language**: All user-facing content (titles, labels, descriptions) must be in **English**, even if the original talk/event was given in Spanish. Translate any Spanish titles before adding them to the site.
