# Environment

You can specify which variables will be used in `environment.model.ts`. <br>
Both development and production files need to be created.

Here is an example of developmente file named `environment.dev.ts`

```typescrypt
import { Environment as Env } from '@models/environment.model';

export const Environment: Env = {
    mode: 'Development'
}
```

Here is an example of production file named `environment.ts`

```typescrypt
import { Environment as Env } from '@models/environment.model';

export const Environment: Env = {
    mode: 'Production'
}
```