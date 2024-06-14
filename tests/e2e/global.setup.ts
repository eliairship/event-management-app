import { test as setup } from '@playwright/test';
import { DockerComposeEnvironment, Wait } from 'testcontainers';
import path from 'path';
// import { fileURLToPath } from 'url';

setup('create new database', async ({}) => {
  console.log('creating new database...');
  // Initialize the database
  const composeFilePath = path.resolve(__dirname, '../../');
  const composeFile = 'docker-compose.yml';

  try {
    await new DockerComposeEnvironment(composeFilePath, composeFile)
      .withProfiles('be', 'fe')
      .withWaitStrategy('api-1', Wait.forLogMessage(/^Server started on 3001/))
      .up();
  } catch (e) {
    console.log(e);
  }

  console.log('Database Created');

  await new Promise((x) => setTimeout(x, 500));
});
