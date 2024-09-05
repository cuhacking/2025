import type { Endpoints } from '@octokit/types'

export type OctokitRepoContentResponse = Endpoints['GET /repos/{owner}/{repo}/contents/{path}']['response']
