# Environment

You can specify which variables will be used in `environment.model.ts`

Here is an example of `environment.dev.ts`

```typescrypt
import { Environment as Env } from '@models/environment.model';

export const Environment: Env = {
    mode: 'Development'
}
```