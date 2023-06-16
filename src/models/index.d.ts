import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum TaskBehavior {
  OPENINTAB = "OPENINTAB",
  OPENINPLACE = "OPENINPLACE",
  OPENINIFRAME = "OPENINIFRAME",
  OPENFORM = "OPENFORM"
}

export enum RoleEnum {
  ADMIN = "ADMIN",
  HOST = "HOST",
  STUDENT = "STUDENT",
  ARCTICDRYRUN = "ARCTICDRYRUN",
  VIRTUADCASTPILOTSTUDENT = "VIRTUADCASTPILOTSTUDENT",
  VIRTUADCASTPILOTTRAINER = "VIRTUADCASTPILOTTRAINER"
}

export enum Language {
  CHINESE = "CHINESE",
  DANISH = "DANISH",
  DUTCH = "DUTCH",
  ENGLISH = "ENGLISH",
  FINNISH = "FINNISH",
  FRENCH = "FRENCH",
  GERMAN = "GERMAN",
  SPANISH = "SPANISH",
  JAPANESE = "JAPANESE",
  NORWEGIAN = "NORWEGIAN",
  PORTUGUESE = "PORTUGUESE",
  BRAZILIANPORTUGUESE = "BRAZILIANPORTUGUESE",
  SWEDISH = "SWEDISH",
  ITALIAN = "ITALIAN"
}

type EagerDeviceGrantParams = {
  readonly expiration?: number | null;
}

type LazyDeviceGrantParams = {
  readonly expiration?: number | null;
}

export declare type DeviceGrantParams = LazyLoading extends LazyLoadingDisabled ? EagerDeviceGrantParams : LazyDeviceGrantParams

export declare const DeviceGrantParams: (new (init: ModelInit<DeviceGrantParams>) => DeviceGrantParams)

type EagerSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly sessionCode?: string | null;
  readonly host?: User | null;
  readonly attendees?: (SessionUserAttendees | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionHostId?: string | null;
}

type LazySession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Session, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly sessionCode?: string | null;
  readonly host: AsyncItem<User | undefined>;
  readonly attendees: AsyncCollection<SessionUserAttendees>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sessionHostId?: string | null;
}

export declare type Session = LazyLoading extends LazyLoadingDisabled ? EagerSession : LazySession

export declare const Session: (new (init: ModelInit<Session>) => Session) & {
  copyOf(source: Session, mutator: (draft: MutableModel<Session>) => MutableModel<Session> | void): Session;
}

type EagerTaskStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User?: User | null;
  readonly Progress?: string | null;
  readonly taskID: string;
  readonly isEnabled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskStatusUserId?: string | null;
}

type LazyTaskStatus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskStatus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Progress?: string | null;
  readonly taskID: string;
  readonly isEnabled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskStatusUserId?: string | null;
}

export declare type TaskStatus = LazyLoading extends LazyLoadingDisabled ? EagerTaskStatus : LazyTaskStatus

export declare const TaskStatus: (new (init: ModelInit<TaskStatus>) => TaskStatus) & {
  copyOf(source: TaskStatus, mutator: (draft: MutableModel<TaskStatus>) => MutableModel<TaskStatus> | void): TaskStatus;
}

type EagerRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Role, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly displayName?: string | null;
  readonly name?: RoleEnum | keyof typeof RoleEnum | null;
  readonly Users?: (UserRole | null)[] | null;
  readonly appID: string;
  readonly apps?: (AppRole | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Role, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly displayName?: string | null;
  readonly name?: RoleEnum | keyof typeof RoleEnum | null;
  readonly Users: AsyncCollection<UserRole>;
  readonly appID: string;
  readonly apps: AsyncCollection<AppRole>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Role = LazyLoading extends LazyLoadingDisabled ? EagerRole : LazyRole

export declare const Role: (new (init: ModelInit<Role>) => Role) & {
  copyOf(source: Role, mutator: (draft: MutableModel<Role>) => MutableModel<Role> | void): Role;
}

type EagerMagicCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MagicCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parameters?: DeviceGrantParams | null;
  readonly titleText: string;
  readonly descriptionText?: string | null;
  readonly apiAlias: string;
  readonly apiResource: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMagicCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MagicCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parameters?: DeviceGrantParams | null;
  readonly titleText: string;
  readonly descriptionText?: string | null;
  readonly apiAlias: string;
  readonly apiResource: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MagicCode = LazyLoading extends LazyLoadingDisabled ? EagerMagicCode : LazyMagicCode

export declare const MagicCode: (new (init: ModelInit<MagicCode>) => MagicCode) & {
  copyOf(source: MagicCode, mutator: (draft: MutableModel<MagicCode>) => MutableModel<MagicCode> | void): MagicCode;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly Apps?: (AppUser | null)[] | null;
  readonly Roles?: (UserRole | null)[] | null;
  readonly Session?: (SessionUserAttendees | null)[] | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatarImageURL?: string | null;
  readonly avatarUrl?: string | null;
  readonly email: string;
  readonly cognitoId: string;
  readonly avatarKey?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly avatarUploaded?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly Apps: AsyncCollection<AppUser>;
  readonly Roles: AsyncCollection<UserRole>;
  readonly Session: AsyncCollection<SessionUserAttendees>;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly avatarImageURL?: string | null;
  readonly avatarUrl?: string | null;
  readonly email: string;
  readonly cognitoId: string;
  readonly avatarKey?: string | null;
  readonly language: Language | keyof typeof Language;
  readonly avatarUploaded?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerApp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<App, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Users?: (AppUser | null)[] | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly MagicCode?: MagicCode | null;
  readonly description?: string | null;
  readonly buttonName?: string | null;
  readonly Roles?: AppRole[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appMagicCodeId?: string | null;
}

type LazyApp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<App, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Users: AsyncCollection<AppUser>;
  readonly Tasks: AsyncCollection<Task>;
  readonly MagicCode: AsyncItem<MagicCode | undefined>;
  readonly description?: string | null;
  readonly buttonName?: string | null;
  readonly Roles: AsyncCollection<AppRole>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appMagicCodeId?: string | null;
}

export declare type App = LazyLoading extends LazyLoadingDisabled ? EagerApp : LazyApp

export declare const App: (new (init: ModelInit<App>) => App) & {
  copyOf(source: App, mutator: (draft: MutableModel<App>) => MutableModel<App> | void): App;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly buttonName?: string | null;
  readonly requiredRole?: (RoleEnum | null)[] | keyof typeof RoleEnum | null;
  readonly url?: string | null;
  readonly order?: number | null;
  readonly taskBehavior?: TaskBehavior | keyof typeof TaskBehavior | null;
  readonly appendUserID?: boolean | null;
  readonly appendTaskID?: boolean | null;
  readonly appID: string;
  readonly TaskStatuses?: (TaskStatus | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly name?: string | null;
  readonly buttonName?: string | null;
  readonly requiredRole?: (RoleEnum | null)[] | keyof typeof RoleEnum | null;
  readonly url?: string | null;
  readonly order?: number | null;
  readonly taskBehavior?: TaskBehavior | keyof typeof TaskBehavior | null;
  readonly appendUserID?: boolean | null;
  readonly appendTaskID?: boolean | null;
  readonly appID: string;
  readonly TaskStatuses: AsyncCollection<TaskStatus>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerSessionUserAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionUserAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionId?: string | null;
  readonly userId?: string | null;
  readonly session: Session;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySessionUserAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SessionUserAttendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sessionId?: string | null;
  readonly userId?: string | null;
  readonly session: AsyncItem<Session>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SessionUserAttendees = LazyLoading extends LazyLoadingDisabled ? EagerSessionUserAttendees : LazySessionUserAttendees

export declare const SessionUserAttendees: (new (init: ModelInit<SessionUserAttendees>) => SessionUserAttendees) & {
  copyOf(source: SessionUserAttendees, mutator: (draft: MutableModel<SessionUserAttendees>) => MutableModel<SessionUserAttendees> | void): SessionUserAttendees;
}

type EagerUserRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserRole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roleId?: string | null;
  readonly userId?: string | null;
  readonly role: Role;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserRole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roleId?: string | null;
  readonly userId?: string | null;
  readonly role: AsyncItem<Role>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserRole = LazyLoading extends LazyLoadingDisabled ? EagerUserRole : LazyUserRole

export declare const UserRole: (new (init: ModelInit<UserRole>) => UserRole) & {
  copyOf(source: UserRole, mutator: (draft: MutableModel<UserRole>) => MutableModel<UserRole> | void): UserRole;
}

type EagerAppRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppRole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roleId?: string | null;
  readonly appId?: string | null;
  readonly role: Role;
  readonly app: App;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppRole = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppRole, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly roleId?: string | null;
  readonly appId?: string | null;
  readonly role: AsyncItem<Role>;
  readonly app: AsyncItem<App>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppRole = LazyLoading extends LazyLoadingDisabled ? EagerAppRole : LazyAppRole

export declare const AppRole: (new (init: ModelInit<AppRole>) => AppRole) & {
  copyOf(source: AppRole, mutator: (draft: MutableModel<AppRole>) => MutableModel<AppRole> | void): AppRole;
}

type EagerAppUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly appId?: string | null;
  readonly user: User;
  readonly app: App;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AppUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly appId?: string | null;
  readonly user: AsyncItem<User>;
  readonly app: AsyncItem<App>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AppUser = LazyLoading extends LazyLoadingDisabled ? EagerAppUser : LazyAppUser

export declare const AppUser: (new (init: ModelInit<AppUser>) => AppUser) & {
  copyOf(source: AppUser, mutator: (draft: MutableModel<AppUser>) => MutableModel<AppUser> | void): AppUser;
}