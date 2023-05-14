import { AfterViewInit, Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'formation-ts-angular-app';


  markdownContent = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  res: string;

  constructor() { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // this.res = this.markdownService.parse(this.markdown);
  }
}
