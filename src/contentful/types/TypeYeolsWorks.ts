import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeYeolsWorksFields {
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    deploymentUrl?: EntryFieldTypes.Symbol;
    stack?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    focus?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    github: EntryFieldTypes.Symbol;
    projectImg?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    description?: EntryFieldTypes.Text;
}

export type TypeYeolsWorksSkeleton = EntrySkeletonType<TypeYeolsWorksFields, "yeolsWorks">;
export type TypeYeolsWorks<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeYeolsWorksSkeleton, Modifiers, Locales>;
