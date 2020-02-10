# Changelog

All notable changes are documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## Next

### Added
- `<TableActionCell/>` - add `divider` field for the secondary actions [#4954](https://github.com/wix/wix-style-react/pull/4954)

## 7.41.0 - 2020-02-09

### Fixed
- `<Layout/>` - Fixed a bug discovered when Chrome 80 was released [#4964](https://github.com/wix/wix-style-react/pull/4964)

### Added:

- `<FontUpgrade/>` - New provider component [#4963](https://github.com/wix/wix-style-react/pull/4963)
- `<Accordion/>` - Added skin prop [#4803](https://github.com/wix/wix-style-react/pull/4803)

### Docs

- Updated "3.12 Tag Input" story documentation [#4176](https://github.com/wix/wix-style-react/pull/4176)

## 7.40.0 - 2020-02-05

### Added:

- `<SidePanel/>` - new Component [#4935](https://github.com/wix/wix-style-react/pull/4935)
- `<CloseButton/>` - add large size support [#4941](https://github.com/wix/wix-style-react/pull/4941)

### Changed

- `<Slider/>`- changing tooltip color [#4955](https://github.com/wix/wix-style-react/pull/4955)

### Fixed

- `<MarketingLayout/>` - Fixed issue where background color would hide an image [#4949](https://github.com/wix/wix-style-react/pull/4949)
- `<Slider/>`- Fixed Slider css [#4932](https://github.com/wix/wix-style-react/pull/4932)
- `<Accordion/>`- Fixed Accordion collapse behaviour and added shadow and divider to accordion item [#4793](https://github.com/wix/wix-style-react/pull/4793)

## 7.39.1 - 2020-02-03

### Fixed

- fixed missing types for named imports [#4945](https://github.com/wix/wix-style-react/pull/4945)

## 7.39.0 - 2020-02-03

### Added:

- `<Image/>` - new component [#4927](https://github.com/wix/wix-style-react/pull/4927)

### Changed:

- `<MarketingLayout/>` - adjusted paddings, added image background [#4936](https://github.com/wix/wix-style-react/pull/4936)

### Fixed:

- `<Tag/>` - changed onClick callback call to pass 'event' as second parameter [#4915](https://github.com/wix/wix-style-react/pull/4915)

## 7.38.1 - 2020-01-28

### Fixed:

- `<Sidebar/>`- Fixing scrollbar for both light and dark skins [#4925](https://github.com/wix/wix-style-react/pull/4925)
- named-imports - implement missing exports [#4930](https://github.com/wix/wix-style-react/pull/4930)

## 7.38.0 - 2020-01-27

### Fixed

- `<Input/>` - fixed `statusMessage` prop type warning [#4921](https://github.com/wix/wix-style-react/pull/4921)
- `<Cell/> Layout` - Fix Firefox bug on grid text overflow [#4906](https://github.com/wix/wix-style-react/pull/4906)

### Docs

- `<GooglePreview/>` - fix broken playground [#4909](https://github.com/wix/wix-style-react/pull/4909)
- `<Dropdown/>` - Improve dropdown list constraints documentation [#4911](https://github.com/wix/wix-style-react/pull/4911)

## 7.37.1 - 2020-01-22

### Fixed

- `<Text/>` - Fix nested `<ul>` styles being applied to incorrect elements [#4905](https://github.com/wix/wix-style-react/pull/4905)

## 7.37.0 - 2020-01-21

### Added

- `<FormField/>` - add `suffix` prop [#4887](https://github.com/wix/wix-style-react/pull/4887)

### Fixed

- `<VariableInput/>` - fix `onBlur` and `onChange` issues [#4894](https://github.com/wix/wix-style-react/pull/4894)

### Docs

- `<VariableInput/>` - change composition to use FormField's suffix [#4901](https://github.com/wix/wix-style-react/pull/4901)

## 7.36.0

### Added

- `<Search/>` - Add support for right to left expansion [#4841](https://github.com/wix/wix-style-react/pull/4841)
- `<Text/>` - add default styling for nested `<ul>` lists [#4876](https://github.com/wix/wix-style-react/pull/4876)

### Fixed

- infrastructure: fix named-importing issues [#4788](https://github.com/wix/wix-style-react/pull/4788)
- `<Button/>` - fix standard secondary disabled color [#4897](https://github.com/wix/wix-style-react/pull/4897)

## 7.35.0 - 2020-01-20

### Changed

- `<Checkbox>` - Stopped propagation on children
- `<Button/>` - migrate to new disabled color [#4886](https://github.com/wix/wix-style-react/pull/4886)

### Docs

- `<MultiSelectCheckbox/>` - Upgraded story page to be more informative

## 7.34.0 - 2020-01-16

### Added

- `<VariableInput/>` - add `multiline` prop [#4864](https://github.com/wix/wix-style-react/pull/4864)
- `<MessageBoxMarketerialLayout/>` - add `primaryButtonNode` prop [#4676](https://github.com/wix/wix-style-react/pull/4676)
- `<MessageBoxMarketerialLayout/>` - add `width` prop [#4878](https://github.com/wix/wix-style-react/pull/4878)
- `<MessageBoxMarketerialLayout/>` - add `noBodyPadding` prop [#4882](https://github.com/wix/wix-style-react/pull/4882)

### Fixed

- `<Input/>` - fix Affixes' margins [#4727](https://github.com/wix/wix-style-react/pull/4727)

## 7.33.0 - 2020-01-13

### Changed

- `<MarketingLayout/>` - Use grid for responsive layout [#4850](https://github.com/wix/wix-style-react/pull/4850)

### Fixed

- Revert "`<Text/>` - add default styling for nested `<ul>` lists" [#4865](https://github.com/wix/wix-style-react/pull/4865)

### Docs

- `<VariableInput/>` - improve docs with examples (including cheatsheet) [#4844](https://github.com/wix/wix-style-react/pull/4844)

## 7.32.0 - 2020-01-13

### Added

- `<Text/>` - added default styling for nested `<ul>` lists [#4726](https://github.com/wix/wix-style-react/pull/4726)
- `<FormField/>` - add new prop labelAlignment [#4814](https://github.com/wix/wix-style-react/pull/4814)
- `<RichTextInputArea/>` - Expose plain text value with onChange event [#4820](https://github.com/wix/wix-style-react/pull/4820)
- `<ListItemSelect/>`, `<ListItemSection/>` - added show tooltip delay of 300ms [#4816](https://github.com/wix/wix-style-react/pull/4816)
- `<MultiSelect/>` - Add status and statusMessage props [#4828](https://github.com/wix/wix-style-react/pull/4828)
- `<TextButton/>` - add destructive skin [#4836](https://github.com/wix/wix-style-react/pull/4836)
- `<Calendar/>` - introduce isDayActive testkit method [#4839](https://github.com/wix/wix-style-react/pull/4839)
- `<ModalPreviewLayout/>` - adding white tooltips to NavigationButtons & close button. [#4777](https://github.com/wix/wix-style-react/pull/4777)

### Changed

- `<Heading/>` - change text color to white for heading=H5, light [#4805](https://github.com/wix/wix-style-react/pull/4805)
- `<SegmentedToggle/>` - change disabled icon and border color to have more contrast [4811](https://github.com/wix/wix-style-react/pull/4811)
- `<FloatingNotification/>` - change `minWidth` [#4809](https://github.com/wix/wix-style-react/pull/4809)
- `<Tooltip/>` - change `textAlign` default value [#4813](https://github.com/wix/wix-style-react/pull/4813)
- `<TextButton/>` - migrate styesheet && update disabled styling && fix transition issues [#4818](https://github.com/wix/wix-style-react/pull/4818)
- `<CloseButton/>` - migrate stylesheet && update disabled styling [#4834](https://github.com/wix/wix-style-react/pull/4834)
- `<Button/>` - add new premium-light skin [#4858](https://github.com/wix/wix-style-react/pull/4858)
- `<Slider/>` - make marks occupy space [#4837](https://github.com/wix/wix-style-react/pull/4837)
- `<InputArea/>` - change InputArea background from transparent to white [#4843](https://github.com/wix/wix-style-react/pull/4843)
- `<ListItemSection/>` - Disable click propogation on divider ans whitespace [#4848](https://github.com/wix/wix-style-react/pull/4848)

### Fixed

- `<ImageViewer/>` - do not render img html at all when imageUrl prop is not defined [#4735](https://github.com/wix/wix-style-react/pull/4735)
- `<Badge/>` - Added missing constants to TypeScript typings [#4807](https://github.com/wix/wix-style-react/pull/4807)
- `<IconButton/>` - migrate stylesheet && update disabled styles && fix inverted color [#4806](https://github.com/wix/wix-style-react/pull/4806)
- `<SocialButton/>` - Horizontally align text to center [#4808](https://github.com/wix/wix-style-react/pull/4808)
- `<MultiSelectCheckbox/>` - fix missing cursor style [#4821](https://github.com/wix/wix-style-react/pull/4821)
- `<Notification.ActionButton/>` - do not require noop `onClick` when `type="textLink"` [#4824](https://github.com/wix/wix-style-react/pull/4824)
- `<ColorPicker/>` - Fix color tooltip was not centered [#4812](https://github.com/wix/wix-style-react/pull/4812)
- `<ColorPicker/>` - Fix Transparent color swatch [#4815](https://github.com/wix/wix-style-react/pull/4815)
- `<AddItem/>` - Remove tooltip when it's empty [#4822](https://github.com/wix/wix-style-react/pull/4822)
- `<InputArea/>` - Use default scrollbar [#4827](https://github.com/wix/wix-style-react/pull/4827)
- `<Tag/>` - fix height when tiny and unremovable [#4857](https://github.com/wix/wix-style-react/pull/4857)

### Labs

- `<VariableInput/>` - create new component [#4791](https://github.com/wix/wix-style-react/pull/4791)
- `<VariableInput/>` - add `onChange` prop [#4801](https://github.com/wix/wix-style-react/pull/4801)
- `<VariableInput/>` - add `placeholder` prop [#4802](https://github.com/wix/wix-style-react/pull/4802)
- `<VariableInput/>` - add `disabled` prop [#4800](https://github.com/wix/wix-style-react/pull/4800)
- `<VariableInput/>` - add `rows` & `size` props [#4825](https://github.com/wix/wix-style-react/pull/4825)
- `<VariableInput/>` - add `status` & `statusMessage` props [#4830](https://github.com/wix/wix-style-react/pull/4830)

## 7.30.0 - 2020-01-06

### Added

- `<Stepper/>`- new features (compact text style, stretched fit, animation) [#4786](https://github.com/wix/wix-style-react/pull/4786)

### Fixed

- `<Table/>` - fix `clickRowCheckbox` in teskit [#4785](https://github.com/wix/wix-style-react/pull/4785)

### Deprecated

- `<PopoverMenu/>` - deprecate story [#4789](https://github.com/wix/wix-style-react/pull/4789)

## 7.29.1 - 2020-01-02

### Added

- `<ModalPreviewLayout/>`- support navigation [#4714](https://github.com/wix/wix-style-react/pull/4714)
- `<Table/>`- add `onCellClick` column prop [#4759](https://github.com/wix/wix-style-react/pull/4759)

### Fixed

- `<Table/>` - enlarge checkbox click area [#4616](https://github.com/wix/wix-style-react/pull/4616)
- `<SidebarSectionItem/>` - fix disabled state css [#4778](https://github.com/wix/wix-style-react/pull/4778)

## Infra

- remove `prepublishOnly` from publish flow [#4768](https://github.com/wix/wix-style-react/pull/4768)
- remove `.st.css` and `.scss` imports from drivers [#4773](https://github.com/wix/wix-style-react/pull/4773)
- fix incorrect drivers import [#4781](https://github.com/wix/wix-style-react/pull/4781)

## 7.28.0 - 2019-12-27

### Fixed

- `<PopoverMenu/>` - Fix SSR rendering [#4756](https://github.com/wix/wix-style-react/pull/4756)

### Docs

- `<Popover/>`- adding dataHook prop to documentation [#4754](https://github.com/wix/wix-style-react/pull/4754)

## 7.27.0 - 2019-12-25

### Docs

- Storybook - Add minimum requirements (React version 16.8) [#4748](https://github.com/wix/wix-style-react/pull/4748)
- Storybook - Fix broken links [#4745](https://github.com/wix/wix-style-react/pull/4745)
- `<DataTable/>` - add propType for `onSortClick` [#4650](https://github.com/wix/wix-style-react/pull/4650)
- `<Box/>` - added a small explanation

## Fixed

- `<NumberInput/>`- Fixing `defaultValue` logic [#4746](https://github.com/wix/wix-style-react/pull/4746)

## 7.26.0 - 2019-12-24

### Fixed

- `<DataTable/>` - fixed header cell cursor css when not sortable [#4685](https://github.com/wix/wix-style-react/pull/4685)
- `<Stepper/>` - Use transparent background for error step circle style [#4732](https://github.com/wix/wix-style-react/pull/4732)
- `EllipsisHOC` - Optimize rerendering issue [#4734](https://github.com/wix/wix-style-react/pull/4734)

### Added

- `<InputArea/>` - adding `status` and `statusMessage` props [#4736](https://github.com/wix/wix-style-react/pull/4736)

## 7.25.0 - 2019-12-19

### Fixed

- `<MessageBoxFunctionalLayout/>` - Revert element hierarchy change [#4728](https://github.com/wix/wix-style-react/pull/4728)

### Docs

- Introducing Storybook version 5

## 7.24.0 - 2019-12-16

### Added

- `<Avatar/>`- updating person svg and adding bussiness svg for `square` shape. [#4705](https://github.com/wix/wix-style-react/pull/4705)

## 7.23.1 - 2019-12-16

### Fixed

- `<SidebardSectionItem/>` - make sure to use css that is supported in microsoft edge [#4679](https://github.com/wix/wix-style-react/pull/4679)
- `<TimeTable/>` - fix wrong position of dragged element [#4682](https://github.com/wix/wix-style-react/pull/4682)
- `<Divider/>` - fix height when rendering inside a flex container [#4696](https://github.com/wix/wix-style-react/pull/4696)
- `<ColorPicker/>` - fix missing `dataHook` propType [#4690](https://github.com/wix/wix-style-react/pull/4690)

### Added

- `<LinearProgressBar/>`- add a success skin (a new `skin` prop) and updating existing component colors [#4631](https://github.com/wix/wix-style-react/pull/4631)
- `<AutoCompleteWithLabel/>`- add `isDisabled` to testkit [#4658](https://github.com/wix/wix-style-react/pull/4658)
- `<FloatingNotification/>`- add `dark` skin [#4683](https://github.com/wix/wix-style-react/pull/4683)

### Changed

- `<GooglePreview/>` - add ellipsis to url [#4699](https://github.com/wix/wix-style-react/pull/4699)
- `<TableActionCell/>` - change the disabled visible items behaviour [#4661](https://github.com/wix/wix-style-react/pull/4661)

## 7.22.0 - 2019-12-09

### Deprecated

- Using icons from `wix-style-react/new-icons` import path has been deprecated. Please install and use icons from `wix-ui-icons-common` package directly. You can migrate your existing codebase using provided codemod, please see [migration guide](./docs/migration/ICONS.md) for more details.

### Added

- `<Table/>` - add `getRowsCount` to Puppeteer testkit [#4651](https://github.com/wix/wix-style-react/pull/4651)
- `<Palette>` - new component [#4603](https://github.com/wix/wix-style-react/pull/4603)
- `<ToggleSwitch/>`- adding unidriver [#4668](https://github.com/wix/wix-style-react/pull/4668)

### Fixed

- `<PopoverMenu/>` - fix testkit typings [#4652](https://github.com/wix/wix-style-react/pull/4652)
- `<ColorInput/>` - fix bug with keeping color shown after removing it [#4624](https://github.com/wix/wix-style-react/pull/4624)

## 7.21.0 - 2019-12-03

### Added

- `<ListItemSection/>` - Added onClick prop [#4641](https://github.com/wix/wix-style-react/pull/4641)
- `<FillPreview/>` - add support for rendering as something else and fix broken stylable extending feature [#4643](https://github.com/wix/wix-style-react/pull/4643)
- `<Multiselect/>` - add `clearOnBlur` prop [#4645](https://github.com/wix/wix-style-react/pull/4645)
- `<Input/>` - add `pattern` prop [#4642](https://github.com/wix/wix-style-react/pull/4642)
- `<Popover/>` and `<InputWithOptions/>` - add disableClickOutsideWhenClosed prop [#4633](https://github.com/wix/wix-style-react/pull/4642)
  **Note:** Using this prop will enable a breaking-change behavior that will be a default in wsr 8.0.0 and the prop will be removed

### Changed

- `<DropdownLayout/>` - Selecting item will not remove hover behavior [#4639](https://github.com/wix/wix-style-react/pull/4639)
- `<Card.Subheader/>` & `<Table/>` - change background color for `neutral` skin to have more contrast with page background [#4625](https://github.com/wix/wix-style-react/pull/4625)

### Fixed

- `<ModalSelectLayout/>` - remove hard-coded dataHook [#4638](https://github.com/wix/wix-style-react/pull/4638)

## 7.20.0 - 2019-12-02

### Added

- `<ListItemSection/>` - New component [#4572](https://github.com/wix/wix-style-react/pull/4572)
- `<ListItemSelect/>` - New component [#4557](https://github.com/wix/wix-style-react/pull/4557)
- `<TimeTable/>` - New component [#4307](https://github.com/wix/wix-style-react/pull/4307)
- `<FillPreview/>` - expose aspectRatio prop and fix broken stretch on display:flex [#4593](https://github.com/wix/wix-style-react/pull/4593)
- `<Card />` & `<Card.Content />` - add `controls` & `size` props [#4607](https://github.com/wix/wix-style-react/pull/4607)
- `<MarketingLayout />` - new component [#4595](https://github.com/wix/wix-style-react/pull/4595)
- `<ModalSelectorLayout/>` - add sideActions node [#4590](https://github.com/wix/wix-style-react/pull/4590)
- `<InputWithOptions />` - add onOptionsShow/onOptionsHide callbacks [#4591](https://github.com/wix/wix-style-react/pull/4591)

### Fixed

- `<SortableList/>` - Fix issue where dragged preview item had the wrong width [#4601](https://github.com/wix/wix-style-react/pull/4601)
- `<LinearProgressBar/>` - do not display empty tooltip given no `errorMessage` [#4618](https://github.com/wix/wix-style-react/pull/4618)
- `<DropdownLayout/>` - Fix hover behaviour loss on click [#4553](https://github.com/wix/wix-style-react/pull/4553)

## 7.19.0 - 2019-11-26

### Added

- `<Proportion/>` - add new type to aspectRatio to disable aspectRatio holder [#4580](https://github.com/wix/wix-style-react/pull/4580)
- `<InputWithLabel/>` & `<AutoCompleteWithLabel/>` - add icon to error message [#4576](https://github.com/wix/wix-style-react/pull/4576)
- `<EmptyState/>` - add `align` prop to EmptyState component [#4579](https://github.com/wix/wix-style-react/pull/4579)

### Changed

- `<Selector/>` - change `title` prop type to `node` [#4592](https://github.com/wix/wix-style-react/pull/4592)
- `<MessageBoxMarketerialLayout/>`- change header height when `imageUrl` or `imageComponent` is undefined. [#4594](https://github.com/wix/wix-style-react/pull/4594)

## 7.18.0 - 2019-11-24

### Added

- `<SidebarSectionItem/>` & `<SidebarBackButton/>` - support a11y [#4581](https://github.com/wix/wix-style-react/pull/4581)

### Changed

- `<Sidebar/>` - adjust visual components according to the spec [#4570](https://github.com/wix/wix-style-react/pull/4570)
- `<TableActionCell/>` - refactor to use beta <PopoverMenu/> only with `upgrade` flag [#4586](https://github.com/wix/wix-style-react/pull/4586)

## 7.17.0 - 2019-11-21

### Added

- `<Table/>` - enable setting origin for selection change event [#4559](https://github.com/wix/wix-style-react/pull/4559)
- `<Table/>` - add `virtualizedListRef` prop for experimental virtualized table [#4502](https://github.com/wix/wix-style-react/pull/4502)
- `<AutoCompleteWithLabel/>` - expose `hasError` in testkit [#4567](https://github.com/wix/wix-style-react/pull/4567)
- `<ModalSelectorLayout/>` - add support for `item.subtitleNode`, `item.belowNode` & `item.showBelowNodeOnSelect` [#4438](https://github.com/wix/wix-style-react/pull/4438)

### Changed

- `<AutoCompleteWithLabel/>` - reset filtered options after blur [#4564](https://github.com/wix/wix-style-react/pull/4564)
- `<SidebarSectionItem/>` - change chevron opacity for `alwaysDisplayChevron` [#4563](https://github.com/wix/wix-style-react/pull/4563)
- `<BrowserPreviewWidget/>`,`<PreviewWidget/>`, `<MobilePreviewWidget/>` - moving from `WIP` to `Components` section and small docs fixes. [#4558](https://github.com/wix/wix-style-react/pull/4558)

### Fixed

- `<InputWithOptions/>` - Fix some testkit methods not working in Puppeteer environment [#4560](https://github.com/wix/wix-style-react/pull/4560)
- `<Sidebar/>` - render borderRight only for `light` skin [#4566](https://github.com/wix/wix-style-react/pull/4566)
- `<Page />` & `<Page.Tail />` - remove scrollbar for non overflowing content [#4539](https://github.com/wix/wix-style-react/pull/4571)
- `<Checkbox/>` - Fix children width [#4571](https://github.com/wix/wix-style-react/pull/4571)
- `<AddItem/>` - Fix onClick not triggering on first click [#4575](https://github.com/wix/wix-style-react/pull/4575)

## 7.16.1 - 2019-11-18

### Fixed

- revert Buttons Family - migrate stylesheets to wsr & update disabled color according to specs [#4523](https://github.com/wix/wix-style-react/pull/4523)

### Added

- `<BrowserPreviewWidget/>`- (WIP) new component [#4515](https://github.com/wix/wix-style-react/pull/4515)
- `<MobilePreviewWidget/>`- (WIP) Adding scroll to large content [#4515](https://github.com/wix/wix-style-react/pull/4550)

## 7.16.0 - 2019-11-18

### Changed

- Buttons Family - migrate stylesheets to wsr & update disabled color according to specs [#4523](https://github.com/wix/wix-style-react/pull/4523)

### Added

- `<Checkbox/>` - add small size [#4525](https://github.com/wix/wix-style-react/pull/4525)
- `<AutoCompleteWithLabel/>` - add `native` prop [#4528](https://github.com/wix/wix-style-react/pull/4528)
- `<MobilePreviewWidget/>`- (WIP) new component [#4496](https://github.com/wix/wix-style-react/pull/4496)
- `<TableActionCell/>` - enable setting `dataHook` for each action [#4423](https://github.com/wix/wix-style-react/pull/4423)

### Fixed

- `<Table/>` - Fixed missing separator border for Table.Content when column titles are hidden [#4517](https://github.com/wix/wix-style-react/pull/4517)
- `<BadgeSelect/>` - fix missing colors for `neutralLigth`, `warningLight` & `premium` skins [#4516](https://github.com/wix/wix-style-react/pull/4516)
- `<PopoverMenu/>` (beta) - Fix zIndex prop not working as expected [#4530](https://github.com/wix/wix-style-react/pull/4530)
- `<ImageViewer/>` - make sure that onImageLoad is called after the state has been changed [#4537](https://github.com/wix/wix-style-react/pull/4537)
- `<SocialButton/>` - align icon to center [#4542](https://github.com/wix/wix-style-react/pull/4542)

## 7.15.1 - 2019-11-13

- Reverting Buttons family migration from core to wsr

## 7.15.0 - 2019-11-13

### Added

- `<InfoIcon/>` - new component [#4480](https://github.com/wix/wix-style-react/pull/4480)
- `<SocialButton/>` - new component [#4461](https://github.com/wix/wix-style-react/pull/4461)
- EllipsisHOC - add `showTooltip` prop [#4501](https://github.com/wix/wix-style-react/pull/4501)
- `<InputWithLabel/>` - add `isFocusedStyle` method to testkit [#4503](https://github.com/wix/wix-style-react/pull/4503)
- `<Swatches/>` - add isEmptySwatchSelected to testkit [#4458](https://github.com/wix/wix-style-react/pull/4458)

### Changed

- `<PageHeader/>` - adjust back button styling [#4482](https://github.com/wix/wix-style-react/pull/4482)
- `<PreviewWidget/>`- (WIP) API change and documentation update [#4474](https://github.com/wix/wix-style-react/pull/4474)
- `<ErrorIndicator/>` - update propTypes [#4507](https://github.com/wix/wix-style-react/pull/4507)
- `<Sidebar/>` - adjust `backgroundColor` according to spec [#4512](https://github.com/wix/wix-style-react/pull/4512)
- `<BarChart/>` - align text in tooltip to start of line [#4505](https://github.com/wix/wix-style-react/pull/4505)
- `<StatisticsWidget/>` - align text in tooltip to start of line [#4506](https://github.com/wix/wix-style-react/pull/4506)

### Docs

- `<PopoverMenu.MenuItem/>` - fix documentation [#4454](https://github.com/wix/wix-style-react/pull/4454)

### Fixed

- `<Tabs/>` - fix testkit methods not working correctly [#4490](https://github.com/wix/wix-style-react/pull/4490)
- `<DataTable/>` - re-render virtualized table on table prop change [#4491](https://github.com/wix/wix-style-react/pull/4491)
- `<InputWithOptions/>` - fix `onClickOutside` callback not triggering [#4485](https://github.com/wix/wix-style-react/pull/4485)
- `<FormField/>` - fix puppeteer testkit getLabelValue() method [#4504](https://github.com/wix/wix-style-react/pull/4504)
- `<ImageViewer/>` - fix missing `@testing-library/react` when importing any Protractor testkit [#4509](https://github.com/wix/wix-style-react/pull/4509)

## 7.14.1 - 2019-11-07

### Fixed

- `<Ticker/>` - add missing propType [#4479](https://github.com/wix/wix-style-react/pull/4479)
- Fixing wix-style-react polyfills to run in SSR without reference errors [#4463](https://github.com/wix/wix-style-react/pull/4463)

## 7.14.0 - 2019-11-07

### Added

- `<ComposerHeader/>`- added prop "dropShadow" [#4431](https://github.com/wix/wix-style-react/pull/4431)
- `<Swatches />` - added onCancel prop [#4470](https://github.com/wix/wix-style-react/pull/4470)

### Fixed

- `<MediaOverlay />` - Added controlled hover mode and fixed middle content positioning issue [#4465](https://github.com/wix/wix-style-react/pull/4465)
- `<ModalSelectorLayout/>` - add scrollbar styling [#4457](https://github.com/wix/wix-style-react/pull/4457)
- `<Thumbnail/>` - Fix selection borders not visible on focus [#4469](https://github.com/wix/wix-style-react/pull/4469)
- `<Heading/>` - add missing propType [#4466](https://github.com/wix/wix-style-react/pull/4466)
- `<LabelledElement/>` - fix placeholder for children [#4430](https://github.com/wix/wix-style-react/pull/4430)

### Changed

- `<CardGalleryItem/>` - refactor to use MediaOverlay internally [#4459](https://github.com/wix/wix-style-react/pull/4459)
- `<SidebarSectionItem/>` - change padding when drillable [#4476](https://github.com/wix/wix-style-react/pull/4476)
- `<Sidebar/>` - change width to 228px [#4477](https://github.com/wix/wix-style-react/pull/4477)

## 7.13.0 - 2019-11-05

### Added

- `<ModalMobileLayout/>` - create component [#4400](https://github.com/wix/wix-style-react/pull/4400)
- `<Swatches />` - add onChange prop [#4434](https://github.com/wix/wix-style-react/pull/4434)
- `<PreviewWidget/>`- new component (Work In Progress) [#4407](https://github.com/wix/wix-style-react/pull/4407)
- `<SidebarBackButton/>` - create component [#4429](https://github.com/wix/wix-style-react/pull/4429)
- `<MediaOverlay/>` - add compound component with dragg handle icon [#4451](https://github.com/wix/wix-style-react/pull/4451)
- `<InputWithLabel/>` - add customInput prop [#4450](https://github.com/wix/wix-style-react/pull/4450)

### Changed

- `<SidebarSectionItem/>` - improve design [#4445](https://github.com/wix/wix-style-react/pull/4445)

### Fixed

- `<StatisticsWidget/>` - Fix onClick issue [#4419](https://github.com/wix/wix-style-react/pull/4419)
- `<SortableList/>` - fix doubling of items during dragging [#4425](https://github.com/wix/wix-style-react/pull/4425)
- `<ImageViewer/>` - re-add `showRemoveButton` prop [#4408](https://github.com/wix/wix-style-react/pull/4408)
- `<DataTable/>` - virtualized, fix outer element [#4455](https://github.com/wix/wix-style-react/pull/4455)
- `<DataTable/>` - memoized row when virtualized [#4462](https://github.com/wix/wix-style-react/pull/4462)
- `<BarChart/>` - fix padding according to spec [#4449](https://github.com/wix/wix-style-react/pull/4449)

### Docs

- Cheatsheet - add `<ModalMobileLayout/>` to modal family [#4432](https://github.com/wix/wix-style-react/pull/4432)

## 7.12.0 - 2019-10-29

### Added

- `<SortableList/>` - droppable feature [#4409](https://github.com/wix/wix-style-react/pull/4409)
- `<SortableList/>` - insert rule feature [#4406](https://github.com/wix/wix-style-react/pull/4406)
- `<MediaOverlay />` - new component [#4396](https://github.com/wix/wix-style-react/pull/4396)

### Fixed

- `<MultiSelect/>` - Remove little bounce of I-cursor when input gets focus [#4384](https://github.com/wix/wix-style-react/pull/4384)
- `<AutoCompleteWithLabel/>` - fix controlled mode [#4404](https://github.com/wix/wix-style-react/pull/4404)
- `<Sidebar/>` - Fix open/close transitions [#4399](https://github.com/wix/wix-style-react/pull/4399)

## 7.11.0 - 2019-10-28

### Added

- `<AutoCompleteWithLabel/>`, `<InputWithLabel/>` - expose necessary Input props [#4386](https://github.com/wix/wix-style-react/pull/4386)

### Changed

- `<MultiSelect/>` - remove pointer cursor from Tags on hover [#4382](https://github.com/wix/wix-style-react/pull/4382)
- `<Page.Content/>` - Changed `children` prop to be of type node [#4394](https://github.com/wix/wix-style-react/pull/4394)

### Fixed

- `<Proportion/>` - make sure that proportion is not stretching more then its container size [#4385](https://github.com/wix/wix-style-react/pull/4385)
- `<AutoCompleteWithLabel/>` - fix callback for onSelect [#4398](https://github.com/wix/wix-style-react/pull/4398)

### Docs

- `<Sidebar/>` - fix broken example in story page [#4388](https://github.com/wix/wix-style-react/pull/4388)

## 7.10.0 - 2019-10-23

### Added

- `<Sidebar/>` - add `skin` prop [#4299](https://github.com/wix/wix-style-react/pull/4299)
- `<FormField/>` - add `charCount` prop [#4350](https://github.com/wix/wix-style-react/pull/4350)
- `<AutoCompleteWithLabel/>` - create the component [#4052](https://github.com/wix/wix-style-react/pull/4052)
- `<Swatches/>` - add clickEmptySwatch method to testkit [#4357](https://github.com/wix/wix-style-react/pull/4357)
- `<InputWithLabel />`, `<AutoCompleteWithLabel />` - add `onChange`, `onFocus` & `onBlur` props [#4375](https://github.com/wix/wix-style-react/pull/4375)
- `<RadioGroup.Button/>` - Add `tabIndex` prop [#4370](https://github.com/wix/wix-style-react/pull/4370)
- `<FloatingNotification/>` - pass rest props to the buttons [#4376](https://github.com/wix/wix-style-react/pull/4376)
- `<SidebarSectionItem />` - add prop alwaysDisplayChevron [#4379](https://github.com/wix/wix-style-react/pull/4379)

### Changed

- `<SidebarHeader/>` - change padding [#4359](https://github.com/wix/wix-style-react/pull/4359)
- `<Heading/>` - change `light` style for H6 [#4374](https://github.com/wix/wix-style-react/pull/4374)
- `<MessageBoxFunctionalLayout/>` - improve header & body design [#4373](https://github.com/wix/wix-style-react/pull/4373)

### Fixed

- `<SectionHelper/>` - fix margin without close button [#4360](https://github.com/wix/wix-style-react/pull/4360)
- `<InputArea/>` - fix error indicator leak inside testkit [#4363](https://github.com/wix/wix-style-react/pull/4363)

## 7.9.0 - 2019-10-21

### Added

- `<Card />` - Add types for component [#4303](https://github.com/wix/wix-style-react/pull/4303)
- `<Datepicker /> <Calendar />` - Add types for components [#4302](https://github.com/wix/wix-style-react/pull/4302)
- EllipsisHoc - universal hoc for components that need to shrink if prop ellipsis is given [#4340](https://github.com/wix/wix-style-react/pull/4340)

### Fixed

- `<DatePicker/>` - fix placeholder in firefox [#4322](https://github.com/wix/wix-style-react/pull/4322)

## 7.8.0 - 2019-10-16

### Added

- `<SegmentedToggle/>` - fix proptypes and add controlled mode [#4308](https://github.com/wix/wix-style-react/pull/4308)
- `<ComposerHeader/>` - add box shadow to bottom border [#4317](https://github.com/wix/wix-style-react/pull/4317)

## 7.7.0 - 2019-10-15

### Added

- `<Sidebar/>` - add right border [#4265](https://github.com/wix/wix-style-react/pull/4265)
- readd react-motion package to dependecies [#4255](https://github.com/wix/wix-style-react/pull/4255)
- `<RadioGroup/>` - New prop - Selection area [#4206](https://github.com/wix/wix-style-react/pull/4206)
- `<Tag/>` - Add ellipsis to long tags in a container [#4180](https://github.com/wix/wix-style-react/pull/4180)

### Changed

- `<SidebarHeader/>` - make `title` and `subtitle` optional [#4268](https://github.com/wix/wix-style-react/pull/4268)

### Deprecated

- `<Tag/>` - Remove `wrap` prop, wrap is now `true` by default [#4180](https://github.com/wix/wix-style-react/pull/4180)

## 7.6.1 - 2019-10-10

### Added

- `<MessageBoxFunctionalLayout/>` - add support for `margin` prop [#4230](https://github.com/wix/wix-style-react/pull/4230)

### Fixed

- `<CalendarPanel/>` - move e2e to .visual [#4219](https://github.com/wix/wix-style-react/pull/4219)
- `<PopoverMenu/>` - add maxheight support and set default value [#4235](https://github.com/wix/wix-style-react/pull/4235)
- `<FormField/>` - make sure that internal tooltip is unique enough [#4240](https://github.com/wix/wix-style-react/pull/4240)
- `<DropdownLayout/>` - fixed drivers to work with infinite scroll [#4239](https://github.com/wix/wix-style-react/pull/4239)
- `<Dropdownlayout/>` - fix keyboard navigation on infinite scroll [#4233](https://github.com/wix/wix-style-react/pull/4233)

## 7.6.0 - 2019-10-07

### Added

- `<Barchart />` - add onDescriptionInfoShown callback [#4178](https://github.com/wix/wix-style-react/pull/4178)
- `<BarChart />` - add typings [#4189](https://github.com/wix/wix-style-react/pull/4189)
- `<Divider/>` - create the component [#4204](https://github.com/wix/wix-style-react/pull/4204)
- `<Checkbox/>` - New prop - Selection area [#4201](https://github.com/wix/wix-style-react/pull/4201)
- `<Checkbox/>` - New prop - Vertical alignment [#4215](https://github.com/wix/wix-style-react/pull/4215)
- `<DropdownLayout/>` - add support for string based max and min width props [#4216](https://github.com/wix/wix-style-react/pull/4216)

### Fixed

- `<MessageBoxFunctionalLayout/>` - Align footer buttons to center [#4122](https://github.com/wix/wix-style-react/pull/4212)
- `<ComposerHeader/>` - set composerHeader to box-sizing: content-box [#4195](https://github.com/wix/wix-style-react/pull/4195)
- `<Barchart />` - fix labelShort when there is descriptionInfo [#4183](https://github.com/wix/wix-style-react/pull/4183)
- `<PopoverMenu/>` - remove autofocus feature to fix page jumping issues [#4186](https://github.com/wix/wix-style-react/pull/4186)
- `<DropdownBase/>` - fix testkit methods to search for the content with popovers methods [#4186](https://github.com/wix/wix-style-react/pull/4186)
- `<Accordion/>` - fix missing expand label when using icon [#4192](https://github.com/wix/wix-style-react/pull/4192)
- `<Sidebar/>` - prevent crashing when all `<Sidebar.Item/>` elements are disabled [#4214](https://github.com/wix/wix-style-react/pull/4214)

## 7.5.0 - 2019-10-02

### Added

- `<BarChart/>` - new component [#4092](https://github.com/wix/wix-style-react/pull/4092)
- `<ComposerHeader/>` - new component [#4107](https://github.com/wix/wix-style-react/pull/4107)

### Fixed

- `<DatePicker/>` - prop initialOpen should not work when disabled [#4174](https://github.com/wix/wix-style-react/pull/4174)
- `<Input/>` - Fixed inaccurate text mark [#4177](https://github.com/wix/wix-style-react/pull/4177)

### Changed

- `<Checkbox/>` - use new tooltip [#4170](https://github.com/wix/wix-style-react/pull/4170)

## 7.4.0 - 2019-09-26

### Added

- `<AddItem/>` - 2 new props: removeIcon and removePadding [#4166](https://github.com/wix/wix-style-react/pull/4166)
- `<MessageBoxMarketerialLayout/>` - add buttons padding removal prop [#4168](https://github.com/wix/wix-style-react/pull/4168)

### Docs

- `<DatePicker/>` - Added documentation [#4170](https://github.com/wix/wix-style-react/pull/4170)

## 7.3.2 - 2019-09-25

- Internal changes

## 7.3.1 - 2019-09-25

### Added

- `<CardGalleryItem />` - added prop `disabled` for primaryAction [#4160](https://github.com/wix/wix-style-react/pull/4160)
- `<ImageViewer/>` - show a `<Loader/>` and the previous image while an image is loading; do not render `<AddItem/>` behind the image since it's visible in the background of transparent images [#4099](https://github.com/wix/wix-style-react/pull/4099)

### Fixed

- `<FormField/>` - fix label color [#4158](https://github.com/wix/wix-style-react/pull/4158)

## 7.3.0 - 2019-09-24

### Added

- `<ImageViewer/>` - add a prop for render Remove Button [#4070](https://github.com/wix/wix-style-react/pull/4070)
- `<StatisticsWidget />` - add children support for stats [#4053](https://github.com/wix/wix-style-react/pull/4053)
- `<InputWithLabel/>` - create the component [#4051](https://github.com/wix/wix-style-react/pull/4051)

### Changed

- `<FormField/> <InfoIcon/>` - Add size prop [#4123](https://github.com/wix/wix-style-react/pull/4123)
- `<Input/>` - change disabled border and background colors [#4146](https://github.com/wix/wix-style-react/pull/4146)

### Fixed

- `<DropdownBase/>` - fix clickTargetElement method in testkit [#4152](https://github.com/wix/wix-style-react/pull/4152)
- `<Stepper/>` - Fix ellipsis problem with Safari [#4153](https://github.com/wix/wix-style-react/pull/4153)
- `<Tag/>` - remove redundant e2e when we have .visual already [#4139](https://github.com/wix/wix-style-react/pull/4139)
- `<ImageViewer/>` - fix removeRoundedBorders property. [#4131](https://github.com/wix/wix-style-react/issues/4131)
- `<FormField/>` - fix alignment when `size` is small [#4151](https://github.com/wix/wix-style-react/issues/4151)

### Docs

- `<Dropdown/>, <AutoComplete/>` - add overflow example [#4140](https://github.com/wix/wix-style-react/pull/4140)
- `<Breadcrumbs/>`- improving Breadcrumbs docs and adding visual tests [#4121](https://github.com/wix/wix-style-react/pull/4121/files)

## 7.2.0 - 2019-09-19

### Added

- `<Avatar/>` - add new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)
- `<InputArea>` - added support for 'small' size [#4066](https://github.com/wix/wix-style-react/pull/4066)

### Changed

- `<Table/>` - improve `disabled` behavior [#4103](https://github.com/wix/wix-style-react/pull/4103)

### Deprecated

- `<Avatar/>` - deprecate old colors, you should use the new colors [#4114](https://github.com/wix/wix-style-react/pull/4114)

### Fixed

- `<ColorPicker/>` - add support for mobile dragging [#4102](https://github.com/wix/wix-style-react/pull/4102)

### Docs

- `<Modal/>`- improving Modal docs [#4104](https://github.com/wix/wix-style-react/pull/4104)

## 7.1.0 - 2019-09-18

### Added

- `<Swatches />` - new layout and add color button [#4079](https://github.com/wix/wix-style-react/pull/4079)

### Changed

- `<Fillpreview/>` - extract fillbutton functionality and refactor code [#4129](https://github.com/wix/wix-style-react/pull/4129)

## 7.0.0 - 2019-09-18

See [Migrating From v6 to v7](https://github.com/wix/wix-style-react/blob/master/docs/migration/v6-v7.md)

- `React` dev dependencies upgraded to v16. [#4106](https://github.com/wix/wix-style-react/pull/4106)
- `<RichTextArea/> <RichTextAreaComposite/>` - Removed, replaced by `<RichTextInputArea/>` [#4106](https://github.com/wix/wix-style-react/pull/4106)

---

For changelog of older version [see here](CHANGELOG-V3-V6.md)
