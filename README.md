# Fresh Greens

Full stack solo project developed as part of Codework's Software Engineering bootcamp.

## Packages

| Packages          |    Description    |
| :---------------- | :---------------: |
| `packages/server` |  Graphql Server   |
| `packages/web`    | Nextjs Web Client |

## Scripts

| Script             |        Description         |
| :----------------- | :------------------------: |
| `yarn infra:up`    |   Start Docker container   |
| `yarn infra:down`  | Shut down Docker container |
| `yarn dev:server`  |        Start server        |
| `yarn dev:web`     |      Start web client      |
| `yarn dev:codegen` | Run graphql code generator |

## Requirements

- To run this project you need to have `node`, `yarn` and `docker` installed.
- Images are uploaded to AWS S3 so you will need to create an account if you don't already have one
  and add the access keys to `packages/server/.env`.
- For payments you will need a Stripe development account and add the public key to
  `packages/web/.env.local` and the private key to `packages/server/.env`.
- Refer to the `.env.*.example` in the server and web packages to see what env variables are needed
  to start the application correctly.

## Getting started

To get up and running follow these steps

- Install the dependencies by running `yarn` in the root of the project.
- Start the docker container with `yarn infra:up`
- Start the server with `yarn dev:server`
- Start the web client with `yarn dev:web`

## Development Guide

After modifying the graphql schemas in the server or writing new graphql
queries/mutations/subscriptions in the web client, run `yarn codegen` to sync the schemas and
generate new frontend code.

## Contributing

Use `yarn commit` or `git cz` if you have `commitizen` installed globally to check for linting
errors before commiting and standardizing your commit messages.
