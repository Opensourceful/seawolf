// This file is automatically generated by running `npm run generate-types`
// Do not edit it directly.

type ProviderSettings = {
	apiProvider?:
		| (
				| "anthropic"
				| "glama"
				| "openrouter"
				| "bedrock"
				| "vertex"
				| "openai"
				| "ollama"
				| "vscode-lm"
				| "lmstudio"
				| "gemini"
				| "openai-native"
				| "mistral"
				| "deepseek"
				| "unbound"
				| "requesty"
				| "human-relay"
				| "fake-ai"
				| "xai"
		  )
		| undefined
	apiModelId?: string | undefined
	apiKey?: string | undefined
	anthropicBaseUrl?: string | undefined
	anthropicUseAuthToken?: boolean | undefined
	glamaModelId?: string | undefined
	glamaModelInfo?:
		| ({
				maxTokens?: (number | null) | undefined
				contextWindow: number
				supportsImages?: boolean | undefined
				supportsComputerUse?: boolean | undefined
				supportsPromptCache: boolean
				inputPrice?: number | undefined
				outputPrice?: number | undefined
				cacheWritesPrice?: number | undefined
				cacheReadsPrice?: number | undefined
				description?: string | undefined
				reasoningEffort?: ("low" | "medium" | "high") | undefined
				thinking?: boolean | undefined
				minTokensPerCachePoint?: number | undefined
				maxCachePoints?: number | undefined
				cachableFields?: string[] | undefined
		  } | null)
		| undefined
	glamaApiKey?: string | undefined
	openRouterApiKey?: string | undefined
	openRouterModelId?: string | undefined
	openRouterModelInfo?:
		| ({
				maxTokens?: (number | null) | undefined
				contextWindow: number
				supportsImages?: boolean | undefined
				supportsComputerUse?: boolean | undefined
				supportsPromptCache: boolean
				inputPrice?: number | undefined
				outputPrice?: number | undefined
				cacheWritesPrice?: number | undefined
				cacheReadsPrice?: number | undefined
				description?: string | undefined
				reasoningEffort?: ("low" | "medium" | "high") | undefined
				thinking?: boolean | undefined
				minTokensPerCachePoint?: number | undefined
				maxCachePoints?: number | undefined
				cachableFields?: string[] | undefined
		  } | null)
		| undefined
	openRouterBaseUrl?: string | undefined
	openRouterSpecificProvider?: string | undefined
	openRouterUseMiddleOutTransform?: boolean | undefined
	awsAccessKey?: string | undefined
	awsSecretKey?: string | undefined
	awsSessionToken?: string | undefined
	awsRegion?: string | undefined
	awsUseCrossRegionInference?: boolean | undefined
	awsUsePromptCache?: boolean | undefined
	awspromptCacheId?: string | undefined
	awsProfile?: string | undefined
	awsUseProfile?: boolean | undefined
	awsCustomArn?: string | undefined
	vertexKeyFile?: string | undefined
	vertexJsonCredentials?: string | undefined
	vertexProjectId?: string | undefined
	vertexRegion?: string | undefined
	openAiBaseUrl?: string | undefined
	openAiApiKey?: string | undefined
	openAiHostHeader?: string | undefined
	openAiLegacyFormat?: boolean | undefined
	openAiR1FormatEnabled?: boolean | undefined
	openAiModelId?: string | undefined
	openAiCustomModelInfo?:
		| ({
				maxTokens?: (number | null) | undefined
				contextWindow: number
				supportsImages?: boolean | undefined
				supportsComputerUse?: boolean | undefined
				supportsPromptCache: boolean
				inputPrice?: number | undefined
				outputPrice?: number | undefined
				cacheWritesPrice?: number | undefined
				cacheReadsPrice?: number | undefined
				description?: string | undefined
				reasoningEffort?: ("low" | "medium" | "high") | undefined
				thinking?: boolean | undefined
				minTokensPerCachePoint?: number | undefined
				maxCachePoints?: number | undefined
				cachableFields?: string[] | undefined
		  } | null)
		| undefined
	openAiUseAzure?: boolean | undefined
	azureApiVersion?: string | undefined
	openAiStreamingEnabled?: boolean | undefined
	ollamaModelId?: string | undefined
	ollamaBaseUrl?: string | undefined
	vsCodeLmModelSelector?:
		| {
				vendor?: string | undefined
				family?: string | undefined
				version?: string | undefined
				id?: string | undefined
		  }
		| undefined
	lmStudioModelId?: string | undefined
	lmStudioBaseUrl?: string | undefined
	lmStudioDraftModelId?: string | undefined
	lmStudioSpeculativeDecodingEnabled?: boolean | undefined
	geminiApiKey?: string | undefined
	googleGeminiBaseUrl?: string | undefined
	openAiNativeApiKey?: string | undefined
	mistralApiKey?: string | undefined
	mistralCodestralUrl?: string | undefined
	deepSeekBaseUrl?: string | undefined
	deepSeekApiKey?: string | undefined
	unboundApiKey?: string | undefined
	unboundModelId?: string | undefined
	unboundModelInfo?:
		| ({
				maxTokens?: (number | null) | undefined
				contextWindow: number
				supportsImages?: boolean | undefined
				supportsComputerUse?: boolean | undefined
				supportsPromptCache: boolean
				inputPrice?: number | undefined
				outputPrice?: number | undefined
				cacheWritesPrice?: number | undefined
				cacheReadsPrice?: number | undefined
				description?: string | undefined
				reasoningEffort?: ("low" | "medium" | "high") | undefined
				thinking?: boolean | undefined
				minTokensPerCachePoint?: number | undefined
				maxCachePoints?: number | undefined
				cachableFields?: string[] | undefined
		  } | null)
		| undefined
	requestyApiKey?: string | undefined
	requestyModelId?: string | undefined
	requestyModelInfo?:
		| ({
				maxTokens?: (number | null) | undefined
				contextWindow: number
				supportsImages?: boolean | undefined
				supportsComputerUse?: boolean | undefined
				supportsPromptCache: boolean
				inputPrice?: number | undefined
				outputPrice?: number | undefined
				cacheWritesPrice?: number | undefined
				cacheReadsPrice?: number | undefined
				description?: string | undefined
				reasoningEffort?: ("low" | "medium" | "high") | undefined
				thinking?: boolean | undefined
				minTokensPerCachePoint?: number | undefined
				maxCachePoints?: number | undefined
				cachableFields?: string[] | undefined
		  } | null)
		| undefined
	xaiApiKey?: string | undefined
	modelMaxTokens?: number | undefined
	modelMaxThinkingTokens?: number | undefined
	includeMaxTokens?: boolean | undefined
	modelTemperature?: (number | null) | undefined
	reasoningEffort?: ("low" | "medium" | "high") | undefined
	rateLimitSeconds?: number | undefined
	diffEnabled?: boolean | undefined
	fuzzyMatchThreshold?: number | undefined
	fakeAi?: unknown | undefined
}

export type { ProviderSettings }

type GlobalSettings = {
	currentApiConfigName?: string | undefined
	listApiConfigMeta?:
		| {
				id: string
				name: string
				apiProvider?:
					| (
							| "anthropic"
							| "glama"
							| "openrouter"
							| "bedrock"
							| "vertex"
							| "openai"
							| "ollama"
							| "vscode-lm"
							| "lmstudio"
							| "gemini"
							| "openai-native"
							| "mistral"
							| "deepseek"
							| "unbound"
							| "requesty"
							| "human-relay"
							| "fake-ai"
							| "xai"
					  )
					| undefined
		  }[]
		| undefined
	pinnedApiConfigs?:
		| {
				[x: string]: boolean
		  }
		| undefined
	lastShownAnnouncementId?: string | undefined
	customInstructions?: string | undefined
	taskHistory?:
		| {
				id: string
				number: number
				ts: number
				task: string
				tokensIn: number
				tokensOut: number
				cacheWrites?: number | undefined
				cacheReads?: number | undefined
				totalCost: number
				size?: number | undefined
				workspace?: string | undefined
		  }[]
		| undefined
	autoApprovalEnabled?: boolean | undefined
	alwaysAllowReadOnly?: boolean | undefined
	alwaysAllowReadOnlyOutsideWorkspace?: boolean | undefined
	alwaysAllowWrite?: boolean | undefined
	alwaysAllowWriteOutsideWorkspace?: boolean | undefined
	writeDelayMs?: number | undefined
	alwaysAllowBrowser?: boolean | undefined
	alwaysApproveResubmit?: boolean | undefined
	requestDelaySeconds?: number | undefined
	alwaysAllowMcp?: boolean | undefined
	alwaysAllowModeSwitch?: boolean | undefined
	alwaysAllowSubtasks?: boolean | undefined
	alwaysAllowExecute?: boolean | undefined
	allowedCommands?: string[] | undefined
	browserToolEnabled?: boolean | undefined
	browserViewportSize?: string | undefined
	screenshotQuality?: number | undefined
	remoteBrowserEnabled?: boolean | undefined
	remoteBrowserHost?: string | undefined
	cachedChromeHostUrl?: string | undefined
	enableCheckpoints?: boolean | undefined
	showGreeting?: boolean | undefined
	ttsEnabled?: boolean | undefined
	ttsSpeed?: number | undefined
	soundEnabled?: boolean | undefined
	soundVolume?: number | undefined
	maxOpenTabsContext?: number | undefined
	maxWorkspaceFiles?: number | undefined
	showRooIgnoredFiles?: boolean | undefined
	maxReadFileLine?: number | undefined
	terminalOutputLineLimit?: number | undefined
	terminalShellIntegrationTimeout?: number | undefined
	terminalCommandDelay?: number | undefined
	terminalPowershellCounter?: boolean | undefined
	terminalZshClearEolMark?: boolean | undefined
	terminalZshOhMy?: boolean | undefined
	terminalZshP10k?: boolean | undefined
	terminalZdotdir?: boolean | undefined
	rateLimitSeconds?: number | undefined
	diffEnabled?: boolean | undefined
	fuzzyMatchThreshold?: number | undefined
	experiments?:
		| {
				search_and_replace: boolean
				insert_content: boolean
				powerSteering: boolean
		  }
		| undefined
	language?:
		| (
				| "ca"
				| "de"
				| "en"
				| "es"
				| "fr"
				| "hi"
				| "it"
				| "ja"
				| "ko"
				| "pl"
				| "pt-BR"
				| "tr"
				| "vi"
				| "zh-CN"
				| "zh-TW"
		  )
		| undefined
	telemetrySetting?: ("unset" | "enabled" | "disabled") | undefined
	mcpEnabled?: boolean | undefined
	enableMcpServerCreation?: boolean | undefined
	mode?: string | undefined
	modeApiConfigs?:
		| {
				[x: string]: string
		  }
		| undefined
	customModes?:
		| {
				slug: string
				name: string
				roleDefinition: string
				customInstructions?: string | undefined
				groups: (
					| ("read" | "edit" | "browser" | "command" | "mcp" | "modes")
					| [
							"read" | "edit" | "browser" | "command" | "mcp" | "modes",
							{
								fileRegex?: string | undefined
								description?: string | undefined
							},
					  ]
				)[]
				source?: ("global" | "project") | undefined
		  }[]
		| undefined
	customModePrompts?:
		| {
				[x: string]:
					| {
							roleDefinition?: string | undefined
							customInstructions?: string | undefined
					  }
					| undefined
		  }
		| undefined
	customSupportPrompts?:
		| {
				[x: string]: string | undefined
		  }
		| undefined
	enhancementApiConfigId?: string | undefined
}

export type { GlobalSettings }

type ClineMessage = {
	ts: number
	type: "ask" | "say"
	ask?:
		| (
				| "followup"
				| "command"
				| "command_output"
				| "completion_result"
				| "tool"
				| "api_req_failed"
				| "resume_task"
				| "resume_completed_task"
				| "mistake_limit_reached"
				| "browser_action_launch"
				| "use_mcp_server"
				| "finishTask"
		  )
		| undefined
	say?:
		| (
				| "task"
				| "error"
				| "api_req_started"
				| "api_req_finished"
				| "api_req_retried"
				| "api_req_retry_delayed"
				| "api_req_deleted"
				| "text"
				| "reasoning"
				| "completion_result"
				| "user_feedback"
				| "user_feedback_diff"
				| "command_output"
				| "tool"
				| "shell_integration_warning"
				| "browser_action"
				| "browser_action_result"
				| "command"
				| "mcp_server_request_started"
				| "mcp_server_response"
				| "new_task_started"
				| "new_task"
				| "subtask_result"
				| "checkpoint_saved"
				| "rooignore_error"
				| "diff_error"
		  )
		| undefined
	text?: string | undefined
	images?: string[] | undefined
	partial?: boolean | undefined
	reasoning?: string | undefined
	conversationHistoryIndex?: number | undefined
	checkpoint?:
		| {
				[x: string]: unknown
		  }
		| undefined
	progressStatus?:
		| {
				icon?: string | undefined
				text?: string | undefined
		  }
		| undefined
}

export type { ClineMessage }

type TokenUsage = {
	totalTokensIn: number
	totalTokensOut: number
	totalCacheWrites?: number | undefined
	totalCacheReads?: number | undefined
	totalCost: number
	contextTokens: number
}

export type { TokenUsage }

type RooCodeEvents = {
	message: [
		{
			taskId: string
			action: "created" | "updated"
			message: {
				ts: number
				type: "ask" | "say"
				ask?:
					| (
							| "followup"
							| "command"
							| "command_output"
							| "completion_result"
							| "tool"
							| "api_req_failed"
							| "resume_task"
							| "resume_completed_task"
							| "mistake_limit_reached"
							| "browser_action_launch"
							| "use_mcp_server"
							| "finishTask"
					  )
					| undefined
				say?:
					| (
							| "task"
							| "error"
							| "api_req_started"
							| "api_req_finished"
							| "api_req_retried"
							| "api_req_retry_delayed"
							| "api_req_deleted"
							| "text"
							| "reasoning"
							| "completion_result"
							| "user_feedback"
							| "user_feedback_diff"
							| "command_output"
							| "tool"
							| "shell_integration_warning"
							| "browser_action"
							| "browser_action_result"
							| "command"
							| "mcp_server_request_started"
							| "mcp_server_response"
							| "new_task_started"
							| "new_task"
							| "subtask_result"
							| "checkpoint_saved"
							| "rooignore_error"
							| "diff_error"
					  )
					| undefined
				text?: string | undefined
				images?: string[] | undefined
				partial?: boolean | undefined
				reasoning?: string | undefined
				conversationHistoryIndex?: number | undefined
				checkpoint?:
					| {
							[x: string]: unknown
					  }
					| undefined
				progressStatus?:
					| {
							icon?: string | undefined
							text?: string | undefined
					  }
					| undefined
			}
		},
	]
	taskCreated: [string]
	taskStarted: [string]
	taskModeSwitched: [string, string]
	taskPaused: [string]
	taskUnpaused: [string]
	taskAskResponded: [string]
	taskAborted: [string]
	taskSpawned: [string, string]
	taskCompleted: [
		string,
		{
			totalTokensIn: number
			totalTokensOut: number
			totalCacheWrites?: number | undefined
			totalCacheReads?: number | undefined
			totalCost: number
			contextTokens: number
		},
	]
	taskTokenUsageUpdated: [
		string,
		{
			totalTokensIn: number
			totalTokensOut: number
			totalCacheWrites?: number | undefined
			totalCacheReads?: number | undefined
			totalCost: number
			contextTokens: number
		},
	]
}

export type { RooCodeEvents }
