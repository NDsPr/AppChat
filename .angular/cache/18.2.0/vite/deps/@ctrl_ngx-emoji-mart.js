import {
  EmojiComponent,
  EmojiService,
  categories
} from "./chunk-WFHBWZOQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YB5NT6VM.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-63N2P2MX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewChildren,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-JJRVUNO3.js";
import "./chunk-TFMRLFGK.js";
import {
  fromEvent
} from "./chunk-5X3OOUUX.js";
import {
  Subject,
  takeUntil
} from "./chunk-KQP4K3F6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XXQMQBEC.js";

// node_modules/@ctrl/ngx-emoji-mart/fesm2022/ctrl-ngx-emoji-mart.mjs
function AnchorsComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 3);
    ɵɵlistener("click", function AnchorsComponent_ng_template_1_span_0_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const idx_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleClick($event, idx_r2));
    });
    ɵɵelementStart(1, "div");
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 4);
    ɵɵelement(3, "path");
    ɵɵelementEnd()();
    ɵɵnamespaceHTML();
    ɵɵelement(4, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const category_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("color", category_r4.name === ctx_r2.selected ? ctx_r2.color : null);
    ɵɵclassProp("emoji-mart-anchor-selected", category_r4.name === ctx_r2.selected);
    ɵɵattribute("title", ctx_r2.i18n.categories[category_r4.id]);
    ɵɵadvance(3);
    ɵɵattribute("d", ctx_r2.icons[category_r4.id]);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r2.color);
  }
}
function AnchorsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AnchorsComponent_ng_template_1_span_0_Template, 5, 8, "span", 2);
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    ɵɵproperty("ngIf", category_r4.anchor !== false);
  }
}
var _c0 = ["container"];
var _c1 = ["label"];
function CategoryComponent_div_6_div_1_ngx_emoji_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-emoji", 9);
    ɵɵlistener("emojiOverOutsideAngular", function CategoryComponent_div_6_div_1_ngx_emoji_1_Template_ngx_emoji_emojiOverOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.emojiOverOutsideAngular.emit($event));
    })("emojiLeaveOutsideAngular", function CategoryComponent_div_6_div_1_ngx_emoji_1_Template_ngx_emoji_emojiLeaveOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.emojiLeaveOutsideAngular.emit($event));
    })("emojiClickOutsideAngular", function CategoryComponent_div_6_div_1_ngx_emoji_1_Template_ngx_emoji_emojiClickOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.emojiClickOutsideAngular.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const emoji_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("emoji", emoji_r3)("size", ctx_r1.emojiSize)("skin", ctx_r1.emojiSkin)("isNative", ctx_r1.emojiIsNative)("set", ctx_r1.emojiSet)("sheetSize", ctx_r1.emojiSheetSize)("forceSize", ctx_r1.emojiForceSize)("tooltip", ctx_r1.emojiTooltip)("backgroundImageFn", ctx_r1.emojiBackgroundImageFn)("imageUrlFn", ctx_r1.emojiImageUrlFn)("hideObsolete", ctx_r1.hideObsolete)("useButton", ctx_r1.emojiUseButton);
  }
}
function CategoryComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CategoryComponent_div_6_div_1_ngx_emoji_1_Template, 1, 12, "ngx-emoji", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const filteredEmojis_r4 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", filteredEmojis_r4)("ngForTrackBy", ctx_r1.trackById);
  }
}
function CategoryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CategoryComponent_div_6_div_1_Template, 2, 2, "div", 7);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.filteredEmojis$));
  }
}
function CategoryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵelement(2, "ngx-emoji", 10);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 11);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("emoji", ctx_r1.notFoundEmoji)("size", 38)("skin", ctx_r1.emojiSkin)("isNative", ctx_r1.emojiIsNative)("set", ctx_r1.emojiSet)("sheetSize", ctx_r1.emojiSheetSize)("forceSize", ctx_r1.emojiForceSize)("tooltip", ctx_r1.emojiTooltip)("backgroundImageFn", ctx_r1.emojiBackgroundImageFn)("useButton", ctx_r1.emojiUseButton);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.i18n.notfound, " ");
  }
}
function CategoryComponent_ng_template_8_ngx_emoji_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-emoji", 9);
    ɵɵlistener("emojiOverOutsideAngular", function CategoryComponent_ng_template_8_ngx_emoji_0_Template_ngx_emoji_emojiOverOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.emojiOverOutsideAngular.emit($event));
    })("emojiLeaveOutsideAngular", function CategoryComponent_ng_template_8_ngx_emoji_0_Template_ngx_emoji_emojiLeaveOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.emojiLeaveOutsideAngular.emit($event));
    })("emojiClickOutsideAngular", function CategoryComponent_ng_template_8_ngx_emoji_0_Template_ngx_emoji_emojiClickOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.emojiClickOutsideAngular.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const emoji_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("emoji", emoji_r6)("size", ctx_r1.emojiSize)("skin", ctx_r1.emojiSkin)("isNative", ctx_r1.emojiIsNative)("set", ctx_r1.emojiSet)("sheetSize", ctx_r1.emojiSheetSize)("forceSize", ctx_r1.emojiForceSize)("tooltip", ctx_r1.emojiTooltip)("backgroundImageFn", ctx_r1.emojiBackgroundImageFn)("imageUrlFn", ctx_r1.emojiImageUrlFn)("hideObsolete", ctx_r1.hideObsolete)("useButton", ctx_r1.emojiUseButton);
  }
}
function CategoryComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CategoryComponent_ng_template_8_ngx_emoji_0_Template, 1, 12, "ngx-emoji", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1.emojisToDisplay)("ngForTrackBy", ctx_r1.trackById);
  }
}
function SkinComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 2)(1, "span", 3);
    ɵɵlistener("click", function SkinComponent_span_1_Template_span_click_1_listener() {
      const skinTone_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleClick(skinTone_r2));
    })("keyup.enter", function SkinComponent_span_1_Template_span_keyup_enter_1_listener() {
      const skinTone_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleClick(skinTone_r2));
    })("keyup.space", function SkinComponent_span_1_Template_span_keyup_space_1_listener() {
      const skinTone_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleClick(skinTone_r2));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const skinTone_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("selected", skinTone_r2 === ctx_r2.skin);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("emoji-mart-skin emoji-mart-skin-tone-", skinTone_r2, "");
    ɵɵproperty("tabIndex", ctx_r2.tabIndex(skinTone_r2));
    ɵɵattribute("aria-hidden", !ctx_r2.isVisible(skinTone_r2))("aria-pressed", ctx_r2.pressed(skinTone_r2))("aria-haspopup", !!ctx_r2.isSelected(skinTone_r2))("aria-expanded", ctx_r2.expanded(skinTone_r2))("aria-label", ctx_r2.i18n.skintones[skinTone_r2])("title", ctx_r2.i18n.skintones[skinTone_r2]);
  }
}
function PreviewComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const short_name_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" :", short_name_r1, ": ");
  }
}
function PreviewComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const emoticon_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", emoticon_r2, " ");
  }
}
function PreviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "div", 2);
    ɵɵelement(2, "ngx-emoji", 9);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 4)(4, "div", 10);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 11);
    ɵɵtemplate(7, PreviewComponent_div_0_span_7_Template, 2, 1, "span", 12);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 13);
    ɵɵtemplate(9, PreviewComponent_div_0_span_9_Template, 2, 1, "span", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("emoji", ctx_r2.emoji)("size", 38)("isNative", ctx_r2.emojiIsNative)("skin", ctx_r2.emojiSkin)("size", ctx_r2.emojiSize)("set", ctx_r2.emojiSet)("sheetSize", ctx_r2.emojiSheetSize)("backgroundImageFn", ctx_r2.emojiBackgroundImageFn)("imageUrlFn", ctx_r2.emojiImageUrlFn);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.emojiData.name);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.emojiData.shortNames);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.listedEmoticons);
  }
}
function PreviewComponent_ngx_emoji_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-emoji", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("isNative", ctx_r2.emojiIsNative)("skin", ctx_r2.emojiSkin)("set", ctx_r2.emojiSet)("emoji", ctx_r2.idleEmoji)("backgroundImageFn", ctx_r2.emojiBackgroundImageFn)("size", 38)("imageUrlFn", ctx_r2.emojiImageUrlFn);
  }
}
var _c2 = ["inputRef"];
var _c3 = ["scrollRef"];
function PickerComponent_emoji_search_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "emoji-search", 8);
    ɵɵlistener("searchResults", function PickerComponent_emoji_search_3_Template_emoji_search_searchResults_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleSearch($event));
    })("enterKeyOutsideAngular", function PickerComponent_emoji_search_3_Template_emoji_search_enterKeyOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleEnterKey($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("i18n", ctx_r2.i18n)("include", ctx_r2.include)("exclude", ctx_r2.exclude)("custom", ctx_r2.custom)("autoFocus", ctx_r2.autoFocus)("icons", ctx_r2.searchIcons)("emojisToShowFilter", ctx_r2.emojisToShowFilter);
  }
}
function PickerComponent_emoji_category_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "emoji-category", 9);
    ɵɵlistener("emojiOverOutsideAngular", function PickerComponent_emoji_category_6_Template_emoji_category_emojiOverOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleEmojiOver($event));
    })("emojiLeaveOutsideAngular", function PickerComponent_emoji_category_6_Template_emoji_category_emojiLeaveOutsideAngular_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleEmojiLeave());
    })("emojiClickOutsideAngular", function PickerComponent_emoji_category_6_Template_emoji_category_emojiClickOutsideAngular_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleEmojiClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", category_r5.id)("name", category_r5.name)("emojis", category_r5.emojis)("perLine", ctx_r2.perLine)("totalFrequentLines", ctx_r2.totalFrequentLines)("hasStickyPosition", ctx_r2.isNative)("i18n", ctx_r2.i18n)("hideObsolete", ctx_r2.hideObsolete)("notFoundEmoji", ctx_r2.notFoundEmoji)("custom", category_r5.id === ctx_r2.RECENT_CATEGORY.id ? ctx_r2.CUSTOM_CATEGORY.emojis : void 0)("recent", category_r5.id === ctx_r2.RECENT_CATEGORY.id ? ctx_r2.recent : void 0)("virtualize", ctx_r2.virtualize)("virtualizeOffset", ctx_r2.virtualizeOffset)("emojiIsNative", ctx_r2.isNative)("emojiSkin", ctx_r2.skin)("emojiSize", ctx_r2.emojiSize)("emojiSet", ctx_r2.set)("emojiSheetSize", ctx_r2.sheetSize)("emojiForceSize", ctx_r2.isNative)("emojiTooltip", ctx_r2.emojiTooltip)("emojiBackgroundImageFn", ctx_r2.backgroundImageFn)("emojiImageUrlFn", ctx_r2.imageUrlFn)("emojiUseButton", ctx_r2.useButton);
  }
}
function PickerComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "emoji-preview", 10);
    ɵɵlistener("skinChange", function PickerComponent_div_7_Template_emoji_preview_skinChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleSkinChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("emoji", ctx_r2.previewEmoji)("idleEmoji", ctx_r2.emoji)("emojiIsNative", ctx_r2.isNative)("emojiSize", 38)("emojiSkin", ctx_r2.skin)("emojiSet", ctx_r2.set)("i18n", ctx_r2.i18n)("emojiSheetSize", ctx_r2.sheetSize)("emojiBackgroundImageFn", ctx_r2.backgroundImageFn)("emojiImageUrlFn", ctx_r2.imageUrlFn);
    ɵɵattribute("title", ctx_r2.title);
  }
}
var AnchorsComponent = class _AnchorsComponent {
  categories = [];
  color;
  selected;
  i18n;
  icons = {};
  anchorClick = new EventEmitter();
  trackByFn(idx, cat) {
    return cat.id;
  }
  handleClick($event, index) {
    this.anchorClick.emit({
      category: this.categories[index],
      index
    });
  }
  static ɵfac = function AnchorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnchorsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AnchorsComponent,
    selectors: [["emoji-mart-anchors"]],
    inputs: {
      categories: "categories",
      color: "color",
      selected: "selected",
      i18n: "i18n",
      icons: "icons"
    },
    outputs: {
      anchorClick: "anchorClick"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 2,
    consts: [[1, "emoji-mart-anchors"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["class", "emoji-mart-anchor", 3, "emoji-mart-anchor-selected", "color", "click", 4, "ngIf"], [1, "emoji-mart-anchor", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], [1, "emoji-mart-anchor-bar"]],
    template: function AnchorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, AnchorsComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByFn);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnchorsComponent, [{
    type: Component,
    args: [{
      selector: "emoji-mart-anchors",
      template: `
    <div class="emoji-mart-anchors">
      <ng-template
        ngFor
        let-category
        [ngForOf]="categories"
        let-idx="index"
        [ngForTrackBy]="trackByFn"
      >
        <span
          *ngIf="category.anchor !== false"
          [attr.title]="i18n.categories[category.id]"
          (click)="this.handleClick($event, idx)"
          class="emoji-mart-anchor"
          [class.emoji-mart-anchor-selected]="category.name === selected"
          [style.color]="category.name === selected ? color : null"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path [attr.d]="icons[category.id]" />
            </svg>
          </div>
          <span class="emoji-mart-anchor-bar" [style.background-color]="color"></span>
        </span>
      </ng-template>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [CommonModule]
    }]
  }], null, {
    categories: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    anchorClick: [{
      type: Output
    }]
  });
})();
var EmojiFrequentlyService = class _EmojiFrequentlyService {
  platformId;
  NAMESPACE = "emoji-mart";
  frequently = null;
  defaults = {};
  initialized = false;
  DEFAULTS = ["+1", "grinning", "kissing_heart", "heart_eyes", "laughing", "stuck_out_tongue_winking_eye", "sweat_smile", "joy", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart", "poop"];
  constructor(platformId) {
    this.platformId = platformId;
  }
  init() {
    this.frequently = JSON.parse(isPlatformBrowser(this.platformId) && localStorage.getItem(`${this.NAMESPACE}.frequently`) || "null");
    this.initialized = true;
  }
  add(emoji) {
    if (!this.initialized) {
      this.init();
    }
    if (!this.frequently) {
      this.frequently = this.defaults;
    }
    if (!this.frequently[emoji.id]) {
      this.frequently[emoji.id] = 0;
    }
    this.frequently[emoji.id] += 1;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(`${this.NAMESPACE}.last`, emoji.id);
      localStorage.setItem(`${this.NAMESPACE}.frequently`, JSON.stringify(this.frequently));
    }
  }
  get(perLine, totalLines) {
    if (!this.initialized) {
      this.init();
    }
    if (this.frequently === null) {
      this.defaults = {};
      const result = [];
      for (let i = 0; i < perLine; i++) {
        this.defaults[this.DEFAULTS[i]] = perLine - i;
        result.push(this.DEFAULTS[i]);
      }
      return result;
    }
    const quantity = perLine * totalLines;
    const frequentlyKeys = Object.keys(this.frequently);
    const sorted = frequentlyKeys.sort((a, b) => this.frequently[a] - this.frequently[b]).reverse();
    const sliced = sorted.slice(0, quantity);
    const last = isPlatformBrowser(this.platformId) && localStorage.getItem(`${this.NAMESPACE}.last`);
    if (last && !sliced.includes(last)) {
      sliced.pop();
      sliced.push(last);
    }
    return sliced;
  }
  static ɵfac = function EmojiFrequentlyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmojiFrequentlyService)(ɵɵinject(PLATFORM_ID));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _EmojiFrequentlyService,
    factory: _EmojiFrequentlyService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmojiFrequentlyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, null);
})();
var CategoryComponent = class _CategoryComponent {
  ref;
  emojiService;
  frequently;
  emojis = null;
  hasStickyPosition = true;
  name = "";
  perLine = 9;
  totalFrequentLines = 4;
  recent = [];
  custom = [];
  i18n;
  id;
  hideObsolete = true;
  notFoundEmoji;
  virtualize = false;
  virtualizeOffset = 0;
  emojiIsNative;
  emojiSkin;
  emojiSize;
  emojiSet;
  emojiSheetSize;
  emojiForceSize;
  emojiTooltip;
  emojiBackgroundImageFn;
  emojiImageUrlFn;
  emojiUseButton;
  /**
   * Note: the suffix is added explicitly so we know the event is dispatched outside of the Angular zone.
   */
  emojiOverOutsideAngular = new EventEmitter();
  emojiLeaveOutsideAngular = new EventEmitter();
  emojiClickOutsideAngular = new EventEmitter();
  container;
  label;
  containerStyles = {};
  emojisToDisplay = [];
  filteredEmojisSubject = new Subject();
  filteredEmojis$ = this.filteredEmojisSubject.asObservable();
  labelStyles = {};
  labelSpanStyles = {};
  margin = 0;
  minMargin = 0;
  maxMargin = 0;
  top = 0;
  rows = 0;
  constructor(ref, emojiService, frequently) {
    this.ref = ref;
    this.emojiService = emojiService;
    this.frequently = frequently;
  }
  ngOnInit() {
    this.updateRecentEmojis();
    this.emojisToDisplay = this.filterEmojis();
    if (this.noEmojiToDisplay) {
      this.containerStyles = {
        display: "none"
      };
    }
    if (!this.hasStickyPosition) {
      this.labelStyles = {
        height: 28
      };
    }
  }
  ngOnChanges(changes) {
    if (changes.emojis?.currentValue?.length !== changes.emojis?.previousValue?.length) {
      this.emojisToDisplay = this.filterEmojis();
      this.ngAfterViewInit();
    }
  }
  ngAfterViewInit() {
    if (!this.virtualize) {
      return;
    }
    const {
      width
    } = this.container.nativeElement.getBoundingClientRect();
    const perRow = Math.floor(width / (this.emojiSize + 12));
    this.rows = Math.ceil(this.emojisToDisplay.length / perRow);
    this.containerStyles = __spreadProps(__spreadValues({}, this.containerStyles), {
      minHeight: `${this.rows * (this.emojiSize + 12) + 28}px`
    });
    this.ref.detectChanges();
    this.handleScroll(this.container.nativeElement.parentNode.parentNode.scrollTop);
  }
  get noEmojiToDisplay() {
    return this.emojisToDisplay.length === 0;
  }
  memoizeSize() {
    const parent = this.container.nativeElement.parentNode.parentNode;
    const {
      top,
      height
    } = this.container.nativeElement.getBoundingClientRect();
    const parentTop = parent.getBoundingClientRect().top;
    const labelHeight = this.label.nativeElement.getBoundingClientRect().height;
    this.top = top - parentTop + parent.scrollTop;
    if (height === 0) {
      this.maxMargin = 0;
    } else {
      this.maxMargin = height - labelHeight;
    }
  }
  handleScroll(scrollTop) {
    let margin = scrollTop - this.top;
    margin = margin < this.minMargin ? this.minMargin : margin;
    margin = margin > this.maxMargin ? this.maxMargin : margin;
    if (this.virtualize) {
      const {
        top,
        height
      } = this.container.nativeElement.getBoundingClientRect();
      const parentHeight = this.container.nativeElement.parentNode.parentNode.clientHeight;
      if (parentHeight + (parentHeight + this.virtualizeOffset) >= top && -height - (parentHeight + this.virtualizeOffset) <= top) {
        this.filteredEmojisSubject.next(this.emojisToDisplay);
      } else {
        this.filteredEmojisSubject.next([]);
      }
    }
    if (margin === this.margin) {
      this.ref.detectChanges();
      return false;
    }
    if (!this.hasStickyPosition) {
      this.label.nativeElement.style.top = `${margin}px`;
    }
    this.margin = margin;
    this.ref.detectChanges();
    return true;
  }
  updateRecentEmojis() {
    if (this.name !== "Recent") {
      return;
    }
    let frequentlyUsed = this.recent || this.frequently.get(this.perLine, this.totalFrequentLines);
    if (!frequentlyUsed || !frequentlyUsed.length) {
      frequentlyUsed = this.frequently.get(this.perLine, this.totalFrequentLines);
    }
    if (!frequentlyUsed.length) {
      return;
    }
    this.emojis = frequentlyUsed.map((id2) => {
      const emoji = this.custom.filter((e) => e.id === id2)[0];
      if (emoji) {
        return emoji;
      }
      return id2;
    }).filter((id2) => !!this.emojiService.getData(id2));
  }
  updateDisplay(display) {
    this.containerStyles.display = display;
    this.updateRecentEmojis();
    this.ref.detectChanges();
  }
  trackById(index, item) {
    return item;
  }
  filterEmojis() {
    const newEmojis = [];
    for (const emoji of this.emojis || []) {
      if (!emoji) {
        continue;
      }
      const data = this.emojiService.getData(emoji);
      if (!data || data.obsoletedBy && this.hideObsolete || !data.unified && !data.custom) {
        continue;
      }
      newEmojis.push(emoji);
    }
    return newEmojis;
  }
  static ɵfac = function CategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EmojiService), ɵɵdirectiveInject(EmojiFrequentlyService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryComponent,
    selectors: [["emoji-category"]],
    viewQuery: function CategoryComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
      }
    },
    inputs: {
      emojis: "emojis",
      hasStickyPosition: "hasStickyPosition",
      name: "name",
      perLine: "perLine",
      totalFrequentLines: "totalFrequentLines",
      recent: "recent",
      custom: "custom",
      i18n: "i18n",
      id: "id",
      hideObsolete: "hideObsolete",
      notFoundEmoji: "notFoundEmoji",
      virtualize: "virtualize",
      virtualizeOffset: "virtualizeOffset",
      emojiIsNative: "emojiIsNative",
      emojiSkin: "emojiSkin",
      emojiSize: "emojiSize",
      emojiSet: "emojiSet",
      emojiSheetSize: "emojiSheetSize",
      emojiForceSize: "emojiForceSize",
      emojiTooltip: "emojiTooltip",
      emojiBackgroundImageFn: "emojiBackgroundImageFn",
      emojiImageUrlFn: "emojiImageUrlFn",
      emojiUseButton: "emojiUseButton"
    },
    outputs: {
      emojiOverOutsideAngular: "emojiOverOutsideAngular",
      emojiLeaveOutsideAngular: "emojiLeaveOutsideAngular",
      emojiClickOutsideAngular: "emojiClickOutsideAngular"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 10,
    vars: 11,
    consts: [["container", ""], ["label", ""], ["normalRenderTemplate", ""], [1, "emoji-mart-category", 3, "ngStyle"], [1, "emoji-mart-category-label", 3, "ngStyle"], ["aria-hidden", "true", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "emoji", "size", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "imageUrlFn", "hideObsolete", "useButton", "emojiOverOutsideAngular", "emojiLeaveOutsideAngular", "emojiClickOutsideAngular", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "emojiOverOutsideAngular", "emojiLeaveOutsideAngular", "emojiClickOutsideAngular", "emoji", "size", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "imageUrlFn", "hideObsolete", "useButton"], [3, "emoji", "size", "skin", "isNative", "set", "sheetSize", "forceSize", "tooltip", "backgroundImageFn", "useButton"], [1, "emoji-mart-no-results-label"]],
    template: function CategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "section", 3, 0)(2, "div", 4)(3, "span", 5, 1);
        ɵɵtext(5);
        ɵɵelementEnd()();
        ɵɵtemplate(6, CategoryComponent_div_6_Template, 3, 3, "div", 6)(7, CategoryComponent_div_7_Template, 5, 11, "div", 7);
        ɵɵelementEnd();
        ɵɵtemplate(8, CategoryComponent_ng_template_8_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const normalRenderTemplate_r7 = ɵɵreference(9);
        ɵɵclassProp("emoji-mart-no-results", ctx.noEmojiToDisplay);
        ɵɵproperty("ngStyle", ctx.containerStyles);
        ɵɵattribute("aria-label", ctx.i18n.categories[ctx.id]);
        ɵɵadvance(2);
        ɵɵproperty("ngStyle", ctx.labelStyles);
        ɵɵattribute("data-name", ctx.name);
        ɵɵadvance();
        ɵɵproperty("ngStyle", ctx.labelSpanStyles);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.i18n.categories[ctx.id], " ");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.virtualize)("ngIfElse", normalRenderTemplate_r7);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.noEmojiToDisplay);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgStyle, AsyncPipe, EmojiComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryComponent, [{
    type: Component,
    args: [{
      selector: "emoji-category",
      template: `
    <section
      #container
      class="emoji-mart-category"
      [attr.aria-label]="i18n.categories[id]"
      [class.emoji-mart-no-results]="noEmojiToDisplay"
      [ngStyle]="containerStyles"
    >
      <div class="emoji-mart-category-label" [ngStyle]="labelStyles" [attr.data-name]="name">
        <!-- already labeled by the section aria-label -->
        <span #label [ngStyle]="labelSpanStyles" aria-hidden="true">
          {{ i18n.categories[id] }}
        </span>
      </div>

      <div *ngIf="virtualize; else normalRenderTemplate">
        <div *ngIf="filteredEmojis$ | async as filteredEmojis">
          <ngx-emoji
            *ngFor="let emoji of filteredEmojis; trackBy: trackById"
            [emoji]="emoji"
            [size]="emojiSize"
            [skin]="emojiSkin"
            [isNative]="emojiIsNative"
            [set]="emojiSet"
            [sheetSize]="emojiSheetSize"
            [forceSize]="emojiForceSize"
            [tooltip]="emojiTooltip"
            [backgroundImageFn]="emojiBackgroundImageFn"
            [imageUrlFn]="emojiImageUrlFn"
            [hideObsolete]="hideObsolete"
            [useButton]="emojiUseButton"
            (emojiOverOutsideAngular)="emojiOverOutsideAngular.emit($event)"
            (emojiLeaveOutsideAngular)="emojiLeaveOutsideAngular.emit($event)"
            (emojiClickOutsideAngular)="emojiClickOutsideAngular.emit($event)"
          ></ngx-emoji>
        </div>
      </div>

      <div *ngIf="noEmojiToDisplay">
        <div>
          <ngx-emoji
            [emoji]="notFoundEmoji"
            [size]="38"
            [skin]="emojiSkin"
            [isNative]="emojiIsNative"
            [set]="emojiSet"
            [sheetSize]="emojiSheetSize"
            [forceSize]="emojiForceSize"
            [tooltip]="emojiTooltip"
            [backgroundImageFn]="emojiBackgroundImageFn"
            [useButton]="emojiUseButton"
          ></ngx-emoji>
        </div>

        <div class="emoji-mart-no-results-label">
          {{ i18n.notfound }}
        </div>
      </div>
    </section>

    <ng-template #normalRenderTemplate>
      <ngx-emoji
        *ngFor="let emoji of emojisToDisplay; trackBy: trackById"
        [emoji]="emoji"
        [size]="emojiSize"
        [skin]="emojiSkin"
        [isNative]="emojiIsNative"
        [set]="emojiSet"
        [sheetSize]="emojiSheetSize"
        [forceSize]="emojiForceSize"
        [tooltip]="emojiTooltip"
        [backgroundImageFn]="emojiBackgroundImageFn"
        [imageUrlFn]="emojiImageUrlFn"
        [hideObsolete]="hideObsolete"
        [useButton]="emojiUseButton"
        (emojiOverOutsideAngular)="emojiOverOutsideAngular.emit($event)"
        (emojiLeaveOutsideAngular)="emojiLeaveOutsideAngular.emit($event)"
        (emojiClickOutsideAngular)="emojiClickOutsideAngular.emit($event)"
      ></ngx-emoji>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [CommonModule, EmojiComponent]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: EmojiService
    }, {
      type: EmojiFrequentlyService
    }];
  }, {
    emojis: [{
      type: Input
    }],
    hasStickyPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    perLine: [{
      type: Input
    }],
    totalFrequentLines: [{
      type: Input
    }],
    recent: [{
      type: Input
    }],
    custom: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    hideObsolete: [{
      type: Input
    }],
    notFoundEmoji: [{
      type: Input
    }],
    virtualize: [{
      type: Input
    }],
    virtualizeOffset: [{
      type: Input
    }],
    emojiIsNative: [{
      type: Input
    }],
    emojiSkin: [{
      type: Input
    }],
    emojiSize: [{
      type: Input
    }],
    emojiSet: [{
      type: Input
    }],
    emojiSheetSize: [{
      type: Input
    }],
    emojiForceSize: [{
      type: Input
    }],
    emojiTooltip: [{
      type: Input
    }],
    emojiBackgroundImageFn: [{
      type: Input
    }],
    emojiImageUrlFn: [{
      type: Input
    }],
    emojiUseButton: [{
      type: Input
    }],
    emojiOverOutsideAngular: [{
      type: Output
    }],
    emojiLeaveOutsideAngular: [{
      type: Output
    }],
    emojiClickOutsideAngular: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    label: [{
      type: ViewChild,
      args: ["label", {
        static: true
      }]
    }]
  });
})();
function uniq(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
function intersect(a, b) {
  const uniqA = uniq(a);
  const uniqB = uniq(b);
  return uniqA.filter((item) => uniqB.indexOf(item) >= 0);
}
function measureScrollbar() {
  if (typeof document === "undefined") {
    return 0;
  }
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.overflow = "scroll";
  div.style.position = "absolute";
  div.style.top = "-9999px";
  document.body.appendChild(div);
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}
var EmojiSearch = class _EmojiSearch {
  emojiService;
  originalPool = {};
  index = {};
  emojisList = {};
  emoticonsList = {};
  emojiSearch = {};
  constructor(emojiService) {
    this.emojiService = emojiService;
    for (const emojiData of this.emojiService.emojis) {
      const {
        shortNames,
        emoticons
      } = emojiData;
      const id2 = shortNames[0];
      for (const emoticon of emoticons) {
        if (this.emoticonsList[emoticon]) {
          continue;
        }
        this.emoticonsList[emoticon] = id2;
      }
      this.emojisList[id2] = this.emojiService.getSanitizedData(id2);
      this.originalPool[id2] = emojiData;
    }
  }
  addCustomToPool(custom, pool) {
    for (const emoji of custom) {
      const emojiId = emoji.id || emoji.shortNames[0];
      if (emojiId && !pool[emojiId]) {
        pool[emojiId] = this.emojiService.getData(emoji);
        this.emojisList[emojiId] = this.emojiService.getSanitizedData(emoji);
      }
    }
  }
  search(value, emojisToShowFilter, maxResults = 75, include = [], exclude = [], custom = []) {
    this.addCustomToPool(custom, this.originalPool);
    let results;
    let pool = this.originalPool;
    if (value.length) {
      if (value === "-" || value === "-1") {
        return [this.emojisList["-1"]];
      }
      if (value === "+" || value === "+1") {
        return [this.emojisList["+1"]];
      }
      let values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      let allResults = [];
      if (values.length > 2) {
        values = [values[0], values[1]];
      }
      if (include.length || exclude.length) {
        pool = {};
        for (const category of categories || []) {
          const isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
          const isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;
          if (!isIncluded || isExcluded) {
            continue;
          }
          for (const emojiId of category.emojis || []) {
            const emoji = this.emojiService.getData(emojiId);
            pool[emoji?.id ?? ""] = emoji;
          }
        }
        if (custom.length) {
          const customIsIncluded = include && include.length ? include.indexOf("custom") > -1 : true;
          const customIsExcluded = exclude && exclude.length ? exclude.indexOf("custom") > -1 : false;
          if (customIsIncluded && !customIsExcluded) {
            this.addCustomToPool(custom, pool);
          }
        }
      }
      allResults = values.map((v) => {
        let aPool = pool;
        let aIndex = this.index;
        let length = 0;
        for (let charIndex = 0; charIndex < v.length; charIndex++) {
          const char = v[charIndex];
          length++;
          if (!aIndex[char]) {
            aIndex[char] = {};
          }
          aIndex = aIndex[char];
          if (!aIndex.results) {
            const scores = {};
            aIndex.results = [];
            aIndex.pool = {};
            for (const id2 of Object.keys(aPool)) {
              const emoji = aPool[id2];
              if (!this.emojiSearch[id2]) {
                this.emojiSearch[id2] = this.buildSearch(emoji.short_names, emoji.name, emoji.id, emoji.keywords, emoji.emoticons);
              }
              const query = this.emojiSearch[id2];
              const sub = v.substr(0, length);
              const subIndex = query.indexOf(sub);
              if (subIndex !== -1) {
                let score = subIndex + 1;
                if (sub === id2) {
                  score = 0;
                }
                aIndex.results.push(this.emojisList[id2]);
                aIndex.pool[id2] = emoji;
                scores[id2] = score;
              }
            }
            aIndex.results.sort((a, b) => {
              const aScore = scores[a.id];
              const bScore = scores[b.id];
              return aScore - bScore;
            });
          }
          aPool = aIndex.pool;
        }
        return aIndex.results;
      }).filter((a) => a);
      if (allResults.length > 1) {
        results = intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }
    }
    if (results) {
      if (emojisToShowFilter) {
        results = results.filter((result) => {
          if (result && result.id) {
            return emojisToShowFilter(this.emojiService.names[result.id]);
          }
          return false;
        });
      }
      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
    }
    return results || null;
  }
  buildSearch(shortNames, name, id2, keywords, emoticons) {
    const search2 = [];
    const addToSearch = (strings, split) => {
      if (!strings) {
        return;
      }
      const arr = Array.isArray(strings) ? strings : [strings];
      for (const str of arr) {
        const substrings = split ? str.split(/[-|_|\s]+/) : [str];
        for (let s of substrings) {
          s = s.toLowerCase();
          if (!search2.includes(s)) {
            search2.push(s);
          }
        }
      }
    };
    addToSearch(shortNames, true);
    addToSearch(name, true);
    addToSearch(id2, true);
    addToSearch(keywords, true);
    addToSearch(emoticons, false);
    return search2.join(",");
  }
  static ɵfac = function EmojiSearch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmojiSearch)(ɵɵinject(EmojiService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _EmojiSearch,
    factory: _EmojiSearch.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmojiSearch, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: EmojiService
    }];
  }, null);
})();
var SkinComponent = class _SkinComponent {
  /** currently selected skin */
  skin;
  i18n;
  changeSkin = new EventEmitter();
  opened = false;
  skinTones = [1, 2, 3, 4, 5, 6];
  toggleOpen() {
    this.opened = !this.opened;
  }
  isSelected(skinTone) {
    return skinTone === this.skin;
  }
  isVisible(skinTone) {
    return this.opened || this.isSelected(skinTone);
  }
  pressed(skinTone) {
    return this.opened ? !!this.isSelected(skinTone) : "";
  }
  tabIndex(skinTone) {
    return this.isVisible(skinTone) ? "0" : "";
  }
  expanded(skinTone) {
    return this.isSelected(skinTone) ? this.opened : "";
  }
  handleClick(skin) {
    if (!this.opened) {
      this.opened = true;
      return;
    }
    this.opened = false;
    if (skin !== this.skin) {
      this.changeSkin.emit(skin);
    }
  }
  static ɵfac = function SkinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkinComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SkinComponent,
    selectors: [["emoji-skins"]],
    inputs: {
      skin: "skin",
      i18n: "i18n"
    },
    outputs: {
      changeSkin: "changeSkin"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 3,
    consts: [[1, "emoji-mart-skin-swatches"], ["class", "emoji-mart-skin-swatch", 3, "selected", 4, "ngFor", "ngForOf"], [1, "emoji-mart-skin-swatch"], ["role", "button", 3, "click", "keyup.enter", "keyup.space", "tabIndex"]],
    template: function SkinComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵtemplate(1, SkinComponent_span_1_Template, 2, 12, "span", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("opened", ctx.opened);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.skinTones);
      }
    },
    dependencies: [CommonModule, NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkinComponent, [{
    type: Component,
    args: [{
      selector: "emoji-skins",
      template: `
    <section class="emoji-mart-skin-swatches" [class.opened]="opened">
      <span
        *ngFor="let skinTone of skinTones"
        class="emoji-mart-skin-swatch"
        [class.selected]="skinTone === skin"
      >
        <span
          (click)="handleClick(skinTone)"
          (keyup.enter)="handleClick(skinTone)"
          (keyup.space)="handleClick(skinTone)"
          class="emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}"
          role="button"
          [tabIndex]="tabIndex(skinTone)"
          [attr.aria-hidden]="!isVisible(skinTone)"
          [attr.aria-pressed]="pressed(skinTone)"
          [attr.aria-haspopup]="!!isSelected(skinTone)"
          [attr.aria-expanded]="expanded(skinTone)"
          [attr.aria-label]="i18n.skintones[skinTone]"
          [attr.title]="i18n.skintones[skinTone]"
        ></span>
      </span>
    </section>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [CommonModule]
    }]
  }], null, {
    skin: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    changeSkin: [{
      type: Output
    }]
  });
})();
var PreviewComponent = class _PreviewComponent {
  ref;
  emojiService;
  title;
  emoji;
  idleEmoji;
  i18n;
  emojiIsNative;
  emojiSkin;
  emojiSize;
  emojiSet;
  emojiSheetSize;
  emojiBackgroundImageFn;
  emojiImageUrlFn;
  skinChange = new EventEmitter();
  emojiData = {};
  listedEmoticons;
  constructor(ref, emojiService) {
    this.ref = ref;
    this.emojiService = emojiService;
  }
  ngOnChanges() {
    if (!this.emoji) {
      return;
    }
    this.emojiData = this.emojiService.getData(this.emoji, this.emojiSkin, this.emojiSet);
    const knownEmoticons = [];
    const listedEmoticons = [];
    const emoitcons = this.emojiData.emoticons || [];
    emoitcons.forEach((emoticon) => {
      if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
        return;
      }
      knownEmoticons.push(emoticon.toLowerCase());
      listedEmoticons.push(emoticon);
    });
    this.listedEmoticons = listedEmoticons;
    this.ref?.detectChanges();
  }
  static ɵfac = function PreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreviewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EmojiService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PreviewComponent,
    selectors: [["emoji-preview"]],
    inputs: {
      title: "title",
      emoji: "emoji",
      idleEmoji: "idleEmoji",
      i18n: "i18n",
      emojiIsNative: "emojiIsNative",
      emojiSkin: "emojiSkin",
      emojiSize: "emojiSize",
      emojiSet: "emojiSet",
      emojiSheetSize: "emojiSheetSize",
      emojiBackgroundImageFn: "emojiBackgroundImageFn",
      emojiImageUrlFn: "emojiImageUrlFn"
    },
    outputs: {
      skinChange: "skinChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 9,
    vars: 6,
    consts: [["class", "emoji-mart-preview", 4, "ngIf"], [1, "emoji-mart-preview", 3, "hidden"], [1, "emoji-mart-preview-emoji"], [3, "isNative", "skin", "set", "emoji", "backgroundImageFn", "size", "imageUrlFn", 4, "ngIf"], [1, "emoji-mart-preview-data"], [1, "emoji-mart-title-label"], [1, "emoji-mart-preview-skins"], [3, "changeSkin", "skin", "i18n"], [1, "emoji-mart-preview"], [3, "emoji", "size", "isNative", "skin", "set", "sheetSize", "backgroundImageFn", "imageUrlFn"], [1, "emoji-mart-preview-name"], [1, "emoji-mart-preview-shortname"], ["class", "emoji-mart-preview-shortname", 4, "ngFor", "ngForOf"], [1, "emoji-mart-preview-emoticons"], ["class", "emoji-mart-preview-emoticon", 4, "ngFor", "ngForOf"], [1, "emoji-mart-preview-emoticon"], [3, "isNative", "skin", "set", "emoji", "backgroundImageFn", "size", "imageUrlFn"]],
    template: function PreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, PreviewComponent_div_0_Template, 10, 12, "div", 0);
        ɵɵelementStart(1, "div", 1)(2, "div", 2);
        ɵɵtemplate(3, PreviewComponent_ngx_emoji_3_Template, 1, 7, "ngx-emoji", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4)(5, "span", 5);
        ɵɵtext(6);
        ɵɵelementEnd()();
        ɵɵelementStart(7, "div", 6)(8, "emoji-skins", 7);
        ɵɵlistener("changeSkin", function PreviewComponent_Template_emoji_skins_changeSkin_8_listener($event) {
          return ctx.skinChange.emit($event);
        });
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.emoji && ctx.emojiData);
        ɵɵadvance();
        ɵɵproperty("hidden", ctx.emoji);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.idleEmoji && ctx.idleEmoji.length);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.title);
        ɵɵadvance(2);
        ɵɵproperty("skin", ctx.emojiSkin)("i18n", ctx.i18n);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, EmojiComponent, SkinComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviewComponent, [{
    type: Component,
    args: [{
      selector: "emoji-preview",
      template: `
    <div class="emoji-mart-preview" *ngIf="emoji && emojiData">
      <div class="emoji-mart-preview-emoji">
        <ngx-emoji
          [emoji]="emoji"
          [size]="38"
          [isNative]="emojiIsNative"
          [skin]="emojiSkin"
          [size]="emojiSize"
          [set]="emojiSet"
          [sheetSize]="emojiSheetSize"
          [backgroundImageFn]="emojiBackgroundImageFn"
          [imageUrlFn]="emojiImageUrlFn"
        ></ngx-emoji>
      </div>

      <div class="emoji-mart-preview-data">
        <div class="emoji-mart-preview-name">{{ emojiData.name }}</div>
        <div class="emoji-mart-preview-shortname">
          <span
            class="emoji-mart-preview-shortname"
            *ngFor="let short_name of emojiData.shortNames"
          >
            :{{ short_name }}:
          </span>
        </div>
        <div class="emoji-mart-preview-emoticons">
          <span class="emoji-mart-preview-emoticon" *ngFor="let emoticon of listedEmoticons">
            {{ emoticon }}
          </span>
        </div>
      </div>
    </div>

    <div class="emoji-mart-preview" [hidden]="emoji">
      <div class="emoji-mart-preview-emoji">
        <ngx-emoji
          *ngIf="idleEmoji && idleEmoji.length"
          [isNative]="emojiIsNative"
          [skin]="emojiSkin"
          [set]="emojiSet"
          [emoji]="idleEmoji"
          [backgroundImageFn]="emojiBackgroundImageFn"
          [size]="38"
          [imageUrlFn]="emojiImageUrlFn"
        ></ngx-emoji>
      </div>

      <div class="emoji-mart-preview-data">
        <span class="emoji-mart-title-label">{{ title }}</span>
      </div>

      <div class="emoji-mart-preview-skins">
        <emoji-skins
          [skin]="emojiSkin"
          (changeSkin)="skinChange.emit($event)"
          [i18n]="i18n"
        ></emoji-skins>
      </div>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [CommonModule, EmojiComponent, SkinComponent]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: EmojiService
    }];
  }, {
    title: [{
      type: Input
    }],
    emoji: [{
      type: Input
    }],
    idleEmoji: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    emojiIsNative: [{
      type: Input
    }],
    emojiSkin: [{
      type: Input
    }],
    emojiSize: [{
      type: Input
    }],
    emojiSet: [{
      type: Input
    }],
    emojiSheetSize: [{
      type: Input
    }],
    emojiBackgroundImageFn: [{
      type: Input
    }],
    emojiImageUrlFn: [{
      type: Input
    }],
    skinChange: [{
      type: Output
    }]
  });
})();
var id = 0;
var SearchComponent = class _SearchComponent {
  ngZone;
  emojiSearch;
  maxResults = 75;
  autoFocus = false;
  i18n;
  include = [];
  exclude = [];
  custom = [];
  icons;
  emojisToShowFilter;
  searchResults = new EventEmitter();
  enterKeyOutsideAngular = new EventEmitter();
  inputRef;
  isSearching = false;
  icon;
  query = "";
  inputId = `emoji-mart-search-${++id}`;
  destroy$ = new Subject();
  constructor(ngZone, emojiSearch) {
    this.ngZone = ngZone;
    this.emojiSearch = emojiSearch;
  }
  ngOnInit() {
    this.icon = this.icons.search;
    this.setupKeyupListener();
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.inputRef.nativeElement.focus();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  clear() {
    this.query = "";
    this.handleSearch("");
    this.inputRef.nativeElement.focus();
  }
  handleSearch(value) {
    if (value === "") {
      this.icon = this.icons.search;
      this.isSearching = false;
    } else {
      this.icon = this.icons.delete;
      this.isSearching = true;
    }
    const emojis = this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom);
    this.searchResults.emit(emojis);
  }
  handleChange() {
    this.handleSearch(this.query);
  }
  setupKeyupListener() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.inputRef.nativeElement, "keyup").pipe(takeUntil(this.destroy$)).subscribe(($event) => {
      if (!this.query || $event.key !== "Enter") {
        return;
      }
      this.enterKeyOutsideAngular.emit($event);
      $event.preventDefault();
    }));
  }
  static ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(EmojiSearch));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SearchComponent,
    selectors: [["emoji-search"]],
    viewQuery: function SearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
      }
    },
    inputs: {
      maxResults: "maxResults",
      autoFocus: "autoFocus",
      i18n: "i18n",
      include: "include",
      exclude: "exclude",
      custom: "custom",
      icons: "icons",
      emojisToShowFilter: "emojisToShowFilter"
    },
    outputs: {
      searchResults: "searchResults",
      enterKeyOutsideAngular: "enterKeyOutsideAngular"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 8,
    vars: 9,
    consts: [["inputRef", ""], [1, "emoji-mart-search"], ["type", "search", 3, "ngModelChange", "id", "placeholder", "autofocus", "ngModel"], [1, "emoji-mart-sr-only", 3, "htmlFor"], ["type", "button", 1, "emoji-mart-search-icon", 3, "click", "keyup.enter", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "width", "13", "height", "13", "opacity", "0.5"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1)(1, "input", 2, 0);
        ɵɵtwoWayListener("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleChange());
        });
        ɵɵelementEnd();
        ɵɵelementStart(3, "label", 3);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 4);
        ɵɵlistener("click", function SearchComponent_Template_button_click_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.clear());
        })("keyup.enter", function SearchComponent_Template_button_keyup_enter_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.clear());
        });
        ɵɵnamespaceSVG();
        ɵɵelementStart(6, "svg", 5);
        ɵɵelement(7, "path");
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("id", ctx.inputId)("placeholder", ctx.i18n.search)("autofocus", ctx.autoFocus);
        ɵɵtwoWayProperty("ngModel", ctx.query);
        ɵɵadvance(2);
        ɵɵproperty("htmlFor", ctx.inputId);
        ɵɵadvance();
        ɵɵtextInterpolate1(" ", ctx.i18n.search, " ");
        ɵɵadvance();
        ɵɵproperty("disabled", !ctx.isSearching);
        ɵɵattribute("aria-label", ctx.i18n.clear);
        ɵɵadvance(2);
        ɵɵattribute("d", ctx.icon);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchComponent, [{
    type: Component,
    args: [{
      selector: "emoji-search",
      template: `
    <div class="emoji-mart-search">
      <input
        [id]="inputId"
        #inputRef
        type="search"
        [placeholder]="i18n.search"
        [autofocus]="autoFocus"
        [(ngModel)]="query"
        (ngModelChange)="handleChange()"
      />
      <!--
      Use a <label> in addition to the placeholder for accessibility, but place it off-screen
      http://www.maxability.co.in/2016/01/placeholder-attribute-and-why-it-is-not-accessible/
      -->
      <label class="emoji-mart-sr-only" [htmlFor]="inputId">
        {{ i18n.search }}
      </label>
      <button
        type="button"
        class="emoji-mart-search-icon"
        (click)="clear()"
        (keyup.enter)="clear()"
        [disabled]="!isSearching"
        [attr.aria-label]="i18n.clear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="13"
          height="13"
          opacity="0.5"
        >
          <path [attr.d]="icon" />
        </svg>
      </button>
    </div>
  `,
      preserveWhitespaces: false,
      standalone: true,
      imports: [FormsModule]
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: EmojiSearch
    }];
  }, {
    maxResults: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    include: [{
      type: Input
    }],
    exclude: [{
      type: Input
    }],
    custom: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    emojisToShowFilter: [{
      type: Input
    }],
    searchResults: [{
      type: Output
    }],
    enterKeyOutsideAngular: [{
      type: Output
    }],
    inputRef: [{
      type: ViewChild,
      args: ["inputRef", {
        static: true
      }]
    }]
  });
})();
var categories2 = {
  activity: `M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1`,
  custom: `M10 1h3v21h-3zm10.186 4l1.5 2.598L3.5 18.098 2 15.5zM2 7.598L3.5 5l18.186 10.5-1.5 2.598z`,
  flags: `M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z`,
  foods: `M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9`,
  nature: `M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24`,
  objects: `M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7`,
  people: `M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0`,
  places: `M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z`,
  recent: `M13 4h-2v7H9v2h2v2h2v-2h4v-2h-4zm-1-4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20`,
  symbols: `M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76`
};
var search = {
  search: `M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z`,
  delete: `M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z`
};
var I18N = {
  search: "Search",
  emojilist: "List of emoji",
  notfound: "No Emoji Found",
  clear: "Clear",
  categories: {
    search: "Search Results",
    recent: "Frequently Used",
    people: "Smileys & People",
    nature: "Animals & Nature",
    foods: "Food & Drink",
    activity: "Activity",
    places: "Travel & Places",
    objects: "Objects",
    symbols: "Symbols",
    flags: "Flags",
    custom: "Custom"
  },
  skintones: {
    1: "Default Skin Tone",
    2: "Light Skin Tone",
    3: "Medium-Light Skin Tone",
    4: "Medium Skin Tone",
    5: "Medium-Dark Skin Tone",
    6: "Dark Skin Tone"
  }
};
var PickerComponent = class _PickerComponent {
  ngZone;
  renderer;
  ref;
  frequently;
  platformId;
  perLine = 9;
  totalFrequentLines = 4;
  i18n = {};
  style = {};
  title = "Emoji Mart™";
  emoji = "department_store";
  darkMode = !!(typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches);
  color = "#ae65c5";
  hideObsolete = true;
  /** all categories shown */
  categories = [];
  /** used to temporarily draw categories */
  activeCategories = [];
  set = "apple";
  skin = 1;
  /** Renders the native unicode emoji */
  isNative = false;
  emojiSize = 24;
  sheetSize = 64;
  emojisToShowFilter;
  showPreview = true;
  emojiTooltip = false;
  autoFocus = false;
  custom = [];
  hideRecent = true;
  imageUrlFn;
  include;
  exclude;
  notFoundEmoji = "sleuth_or_spy";
  categoriesIcons = categories2;
  searchIcons = search;
  useButton = false;
  enableFrequentEmojiSort = false;
  enableSearch = true;
  showSingleCategory = false;
  virtualize = false;
  virtualizeOffset = 0;
  recent;
  emojiClick = new EventEmitter();
  emojiSelect = new EventEmitter();
  skinChange = new EventEmitter();
  scrollRef;
  previewRef;
  searchRef;
  categoryRefs;
  scrollHeight = 0;
  clientHeight = 0;
  clientWidth = 0;
  selected;
  nextScroll;
  scrollTop;
  firstRender = true;
  previewEmoji = null;
  animationFrameRequestId = null;
  NAMESPACE = "emoji-mart";
  measureScrollbar = 0;
  RECENT_CATEGORY = {
    id: "recent",
    name: "Recent",
    emojis: null
  };
  SEARCH_CATEGORY = {
    id: "search",
    name: "Search",
    emojis: null,
    anchor: false
  };
  CUSTOM_CATEGORY = {
    id: "custom",
    name: "Custom",
    emojis: []
  };
  scrollListener;
  backgroundImageFn = (set, sheetSize) => `https://cdn.jsdelivr.net/npm/emoji-datasource-${set}@14.0.0/img/${set}/sheets-256/${sheetSize}.png`;
  constructor(ngZone, renderer, ref, frequently, platformId) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.ref = ref;
    this.frequently = frequently;
    this.platformId = platformId;
  }
  ngOnInit() {
    this.measureScrollbar = measureScrollbar();
    this.i18n = __spreadValues(__spreadValues({}, I18N), this.i18n);
    this.i18n.categories = __spreadValues(__spreadValues({}, I18N.categories), this.i18n.categories);
    this.skin = JSON.parse(isPlatformBrowser(this.platformId) && localStorage.getItem(`${this.NAMESPACE}.skin`) || "null") || this.skin;
    const allCategories = [...categories];
    if (this.custom.length > 0) {
      this.CUSTOM_CATEGORY.emojis = this.custom.map((emoji) => {
        return __spreadProps(__spreadValues({}, emoji), {
          // `<Category />` expects emoji to have an `id`.
          id: emoji.shortNames[0],
          custom: true
        });
      });
      allCategories.push(this.CUSTOM_CATEGORY);
    }
    if (this.include !== void 0) {
      allCategories.sort((a, b) => {
        if (this.include.indexOf(a.id) > this.include.indexOf(b.id)) {
          return 1;
        }
        return -1;
      });
    }
    for (const category of allCategories) {
      const isIncluded = this.include && this.include.length ? this.include.indexOf(category.id) > -1 : true;
      const isExcluded = this.exclude && this.exclude.length ? this.exclude.indexOf(category.id) > -1 : false;
      if (!isIncluded || isExcluded) {
        continue;
      }
      if (this.emojisToShowFilter) {
        const newEmojis = [];
        const {
          emojis
        } = category;
        for (let emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
          const emoji = emojis[emojiIndex];
          if (this.emojisToShowFilter(emoji)) {
            newEmojis.push(emoji);
          }
        }
        if (newEmojis.length) {
          const newCategory = {
            emojis: newEmojis,
            name: category.name,
            id: category.id
          };
          this.categories.push(newCategory);
        }
      } else {
        this.categories.push(category);
      }
      this.categoriesIcons = __spreadValues(__spreadValues({}, categories2), this.categoriesIcons);
      this.searchIcons = __spreadValues(__spreadValues({}, search), this.searchIcons);
    }
    const includeRecent = this.include && this.include.length ? this.include.indexOf(this.RECENT_CATEGORY.id) > -1 : true;
    const excludeRecent = this.exclude && this.exclude.length ? this.exclude.indexOf(this.RECENT_CATEGORY.id) > -1 : false;
    if (includeRecent && !excludeRecent) {
      this.hideRecent = false;
      this.categories.unshift(this.RECENT_CATEGORY);
    }
    if (this.categories[0]) {
      this.categories[0].first = true;
    }
    this.categories.unshift(this.SEARCH_CATEGORY);
    this.selected = this.categories.filter((category) => category.first)[0].name;
    const categoriesToLoadFirst = Math.min(this.categories.length, 3);
    this.setActiveCategories(this.activeCategories = this.categories.slice(0, categoriesToLoadFirst));
    const lastActiveCategoryEmojis = this.categories[categoriesToLoadFirst - 1].emojis.slice();
    this.categories[categoriesToLoadFirst - 1].emojis = lastActiveCategoryEmojis.slice(0, 60);
    setTimeout(() => {
      this.categories[categoriesToLoadFirst - 1].emojis = lastActiveCategoryEmojis;
      this.setActiveCategories(this.categories);
      this.ref.detectChanges();
      isPlatformBrowser(this.platformId) && this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this.updateCategoriesSize();
        });
      });
    });
    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = this.renderer.listen(this.scrollRef.nativeElement, "scroll", () => {
        this.handleScroll();
      });
    });
  }
  ngOnDestroy() {
    this.scrollListener?.();
    this.cancelAnimationFrame();
  }
  setActiveCategories(categoriesToMakeActive) {
    if (this.showSingleCategory) {
      this.activeCategories = categoriesToMakeActive.filter((x) => x.name === this.selected || x === this.SEARCH_CATEGORY);
    } else {
      this.activeCategories = categoriesToMakeActive;
    }
  }
  updateCategoriesSize() {
    this.categoryRefs.forEach((component) => component.memoizeSize());
    if (this.scrollRef) {
      const target = this.scrollRef.nativeElement;
      this.scrollHeight = target.scrollHeight;
      this.clientHeight = target.clientHeight;
      this.clientWidth = target.clientWidth;
    }
  }
  handleAnchorClick($event) {
    this.updateCategoriesSize();
    this.selected = $event.category.name;
    this.setActiveCategories(this.categories);
    if (this.SEARCH_CATEGORY.emojis) {
      this.handleSearch(null);
      this.searchRef?.clear();
      this.handleAnchorClick($event);
      return;
    }
    const component = this.categoryRefs.find((n) => n.id === $event.category.id);
    if (component) {
      let {
        top
      } = component;
      if ($event.category.first) {
        top = 0;
      } else {
        top += 1;
      }
      this.scrollRef.nativeElement.scrollTop = top;
    }
    this.nextScroll = $event.category.name;
    for (const category of this.categories) {
      const componentToScroll = this.categoryRefs.find(({
        id: id2
      }) => id2 === category.id);
      componentToScroll?.handleScroll(this.scrollRef.nativeElement.scrollTop);
    }
  }
  categoryTrack(index, item) {
    return item.id;
  }
  handleScroll(noSelectionChange = false) {
    if (this.nextScroll) {
      this.selected = this.nextScroll;
      this.nextScroll = void 0;
      this.ref.detectChanges();
      return;
    }
    if (!this.scrollRef) {
      return;
    }
    if (this.showSingleCategory) {
      return;
    }
    let activeCategory;
    if (this.SEARCH_CATEGORY.emojis) {
      activeCategory = this.SEARCH_CATEGORY;
    } else {
      const target = this.scrollRef.nativeElement;
      if (target.scrollTop === 0) {
        activeCategory = this.categories.find((n) => n.first === true);
      } else if (target.scrollHeight - target.scrollTop === this.clientHeight) {
        activeCategory = this.categories[this.categories.length - 1];
      } else {
        for (const category of this.categories) {
          const component = this.categoryRefs.find(({
            id: id2
          }) => id2 === category.id);
          const active = component?.handleScroll(target.scrollTop);
          if (active) {
            activeCategory = category;
          }
        }
      }
      this.scrollTop = target.scrollTop;
    }
    if (!noSelectionChange && activeCategory && activeCategory.name !== this.selected) {
      this.selected = activeCategory.name;
      this.ref.detectChanges();
    } else if (noSelectionChange) {
      this.ref.detectChanges();
    }
  }
  handleSearch($emojis) {
    this.SEARCH_CATEGORY.emojis = $emojis;
    for (const component of this.categoryRefs.toArray()) {
      if (component.name === "Search") {
        component.emojis = $emojis;
        component.updateDisplay($emojis ? "block" : "none");
      } else {
        component.updateDisplay($emojis ? "none" : "block");
      }
    }
    this.scrollRef.nativeElement.scrollTop = 0;
    this.handleScroll();
  }
  handleEnterKey($event, emoji) {
    if (!emoji) {
      if (this.SEARCH_CATEGORY.emojis !== null && this.SEARCH_CATEGORY.emojis.length) {
        emoji = this.SEARCH_CATEGORY.emojis[0];
        if (emoji) {
          dispatchInAngularContextIfObserved(this.emojiSelect, this.ngZone, {
            $event,
            emoji
          });
        } else {
          return;
        }
      }
    }
    if (!this.hideRecent && !this.recent && emoji) {
      this.frequently.add(emoji);
    }
    const component = this.categoryRefs.toArray()[1];
    if (component && this.enableFrequentEmojiSort) {
      this.ngZone.run(() => {
        component.updateRecentEmojis();
        component.ref.markForCheck();
      });
    }
  }
  handleEmojiOver($event) {
    if (!this.showPreview || !this.previewRef) {
      return;
    }
    const emojiData = this.CUSTOM_CATEGORY.emojis.find((customEmoji) => customEmoji.id === $event.emoji.id);
    if (emojiData) {
      $event.emoji = __spreadValues({}, emojiData);
    }
    this.previewEmoji = $event.emoji;
    this.cancelAnimationFrame();
    this.ref.detectChanges();
  }
  handleEmojiLeave() {
    if (!this.showPreview || !this.previewRef) {
      return;
    }
    this.animationFrameRequestId = requestAnimationFrame(() => {
      this.previewEmoji = null;
      this.ref.detectChanges();
    });
  }
  handleEmojiClick($event) {
    dispatchInAngularContextIfObserved(this.emojiClick, this.ngZone, $event);
    dispatchInAngularContextIfObserved(this.emojiSelect, this.ngZone, $event);
    this.handleEnterKey($event.$event, $event.emoji);
  }
  handleSkinChange(skin) {
    this.skin = skin;
    localStorage.setItem(`${this.NAMESPACE}.skin`, String(skin));
    this.skinChange.emit(skin);
  }
  getWidth() {
    if (this.style && this.style.width) {
      return this.style.width;
    }
    return this.perLine * (this.emojiSize + 12) + 12 + 2 + this.measureScrollbar + "px";
  }
  cancelAnimationFrame() {
    if (this.animationFrameRequestId !== null) {
      cancelAnimationFrame(this.animationFrameRequestId);
      this.animationFrameRequestId = null;
    }
  }
  static ɵfac = function PickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EmojiFrequentlyService), ɵɵdirectiveInject(PLATFORM_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PickerComponent,
    selectors: [["emoji-mart"]],
    viewQuery: function PickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c3, 7);
        ɵɵviewQuery(PreviewComponent, 5);
        ɵɵviewQuery(SearchComponent, 5);
        ɵɵviewQuery(CategoryComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previewRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.categoryRefs = _t);
      }
    },
    inputs: {
      perLine: "perLine",
      totalFrequentLines: "totalFrequentLines",
      i18n: "i18n",
      style: "style",
      title: "title",
      emoji: "emoji",
      darkMode: "darkMode",
      color: "color",
      hideObsolete: "hideObsolete",
      categories: "categories",
      activeCategories: "activeCategories",
      set: "set",
      skin: "skin",
      isNative: "isNative",
      emojiSize: "emojiSize",
      sheetSize: "sheetSize",
      emojisToShowFilter: "emojisToShowFilter",
      showPreview: "showPreview",
      emojiTooltip: "emojiTooltip",
      autoFocus: "autoFocus",
      custom: "custom",
      hideRecent: "hideRecent",
      imageUrlFn: "imageUrlFn",
      include: "include",
      exclude: "exclude",
      notFoundEmoji: "notFoundEmoji",
      categoriesIcons: "categoriesIcons",
      searchIcons: "searchIcons",
      useButton: "useButton",
      enableFrequentEmojiSort: "enableFrequentEmojiSort",
      enableSearch: "enableSearch",
      showSingleCategory: "showSingleCategory",
      virtualize: "virtualize",
      virtualizeOffset: "virtualizeOffset",
      recent: "recent",
      backgroundImageFn: "backgroundImageFn"
    },
    outputs: {
      emojiClick: "emojiClick",
      emojiSelect: "emojiSelect",
      skinChange: "skinChange"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 8,
    vars: 16,
    consts: [["scrollRef", ""], [3, "ngStyle"], [1, "emoji-mart-bar"], [3, "anchorClick", "categories", "color", "selected", "i18n", "icons"], [3, "i18n", "include", "exclude", "custom", "autoFocus", "icons", "emojisToShowFilter", "searchResults", "enterKeyOutsideAngular", 4, "ngIf"], [1, "emoji-mart-scroll"], [3, "id", "name", "emojis", "perLine", "totalFrequentLines", "hasStickyPosition", "i18n", "hideObsolete", "notFoundEmoji", "custom", "recent", "virtualize", "virtualizeOffset", "emojiIsNative", "emojiSkin", "emojiSize", "emojiSet", "emojiSheetSize", "emojiForceSize", "emojiTooltip", "emojiBackgroundImageFn", "emojiImageUrlFn", "emojiUseButton", "emojiOverOutsideAngular", "emojiLeaveOutsideAngular", "emojiClickOutsideAngular", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "emoji-mart-bar", 4, "ngIf"], [3, "searchResults", "enterKeyOutsideAngular", "i18n", "include", "exclude", "custom", "autoFocus", "icons", "emojisToShowFilter"], [3, "emojiOverOutsideAngular", "emojiLeaveOutsideAngular", "emojiClickOutsideAngular", "id", "name", "emojis", "perLine", "totalFrequentLines", "hasStickyPosition", "i18n", "hideObsolete", "notFoundEmoji", "custom", "recent", "virtualize", "virtualizeOffset", "emojiIsNative", "emojiSkin", "emojiSize", "emojiSet", "emojiSheetSize", "emojiForceSize", "emojiTooltip", "emojiBackgroundImageFn", "emojiImageUrlFn", "emojiUseButton"], [3, "skinChange", "emoji", "idleEmoji", "emojiIsNative", "emojiSize", "emojiSkin", "emojiSet", "i18n", "emojiSheetSize", "emojiBackgroundImageFn", "emojiImageUrlFn"]],
    template: function PickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "section", 1)(1, "div", 2)(2, "emoji-mart-anchors", 3);
        ɵɵlistener("anchorClick", function PickerComponent_Template_emoji_mart_anchors_anchorClick_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleAnchorClick($event));
        });
        ɵɵelementEnd()();
        ɵɵtemplate(3, PickerComponent_emoji_search_3_Template, 1, 7, "emoji-search", 4);
        ɵɵelementStart(4, "section", 5, 0);
        ɵɵtemplate(6, PickerComponent_emoji_category_6_Template, 1, 23, "emoji-category", 6);
        ɵɵelementEnd();
        ɵɵtemplate(7, PickerComponent_div_7_Template, 2, 11, "div", 7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMapInterpolate1("emoji-mart ", ctx.darkMode ? "emoji-mart-dark" : "", "");
        ɵɵstyleProp("width", ctx.getWidth());
        ɵɵproperty("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("categories", ctx.categories)("color", ctx.color)("selected", ctx.selected)("i18n", ctx.i18n)("icons", ctx.categoriesIcons);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.enableSearch);
        ɵɵadvance();
        ɵɵattribute("aria-label", ctx.i18n.emojilist);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.activeCategories)("ngForTrackBy", ctx.categoryTrack);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showPreview);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgStyle, AnchorsComponent, SearchComponent, PreviewComponent, CategoryComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerComponent, [{
    type: Component,
    args: [{
      selector: "emoji-mart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: true,
      imports: [CommonModule, AnchorsComponent, SearchComponent, PreviewComponent, CategoryComponent],
      template: `<section
  class="emoji-mart {{ darkMode ? 'emoji-mart-dark' : '' }}"
  [style.width]="getWidth()"
  [ngStyle]="style"
>
  <div class="emoji-mart-bar">
    <emoji-mart-anchors
      [categories]="categories"
      (anchorClick)="handleAnchorClick($event)"
      [color]="color"
      [selected]="selected"
      [i18n]="i18n"
      [icons]="categoriesIcons"
    ></emoji-mart-anchors>
  </div>
  <emoji-search
    *ngIf="enableSearch"
    [i18n]="i18n"
    (searchResults)="handleSearch($event)"
    (enterKeyOutsideAngular)="handleEnterKey($event)"
    [include]="include"
    [exclude]="exclude"
    [custom]="custom"
    [autoFocus]="autoFocus"
    [icons]="searchIcons"
    [emojisToShowFilter]="emojisToShowFilter"
  ></emoji-search>
  <section #scrollRef class="emoji-mart-scroll" [attr.aria-label]="i18n.emojilist">
    <emoji-category
      *ngFor="let category of activeCategories; let idx = index; trackBy: categoryTrack"
      [id]="category.id"
      [name]="category.name"
      [emojis]="category.emojis"
      [perLine]="perLine"
      [totalFrequentLines]="totalFrequentLines"
      [hasStickyPosition]="isNative"
      [i18n]="i18n"
      [hideObsolete]="hideObsolete"
      [notFoundEmoji]="notFoundEmoji"
      [custom]="category.id === RECENT_CATEGORY.id ? CUSTOM_CATEGORY.emojis : undefined"
      [recent]="category.id === RECENT_CATEGORY.id ? recent : undefined"
      [virtualize]="virtualize"
      [virtualizeOffset]="virtualizeOffset"
      [emojiIsNative]="isNative"
      [emojiSkin]="skin"
      [emojiSize]="emojiSize"
      [emojiSet]="set"
      [emojiSheetSize]="sheetSize"
      [emojiForceSize]="isNative"
      [emojiTooltip]="emojiTooltip"
      [emojiBackgroundImageFn]="backgroundImageFn"
      [emojiImageUrlFn]="imageUrlFn"
      [emojiUseButton]="useButton"
      (emojiOverOutsideAngular)="handleEmojiOver($event)"
      (emojiLeaveOutsideAngular)="handleEmojiLeave()"
      (emojiClickOutsideAngular)="handleEmojiClick($event)"
    ></emoji-category>
  </section>
  <div class="emoji-mart-bar" *ngIf="showPreview">
    <emoji-preview
      [attr.title]="title"
      [emoji]="previewEmoji"
      [idleEmoji]="emoji"
      [emojiIsNative]="isNative"
      [emojiSize]="38"
      [emojiSkin]="skin"
      [emojiSet]="set"
      [i18n]="i18n"
      [emojiSheetSize]="sheetSize"
      [emojiBackgroundImageFn]="backgroundImageFn"
      [emojiImageUrlFn]="imageUrlFn"
      (skinChange)="handleSkinChange($event)"
    ></emoji-preview>
  </div>
</section>
`
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: EmojiFrequentlyService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    perLine: [{
      type: Input
    }],
    totalFrequentLines: [{
      type: Input
    }],
    i18n: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    emoji: [{
      type: Input
    }],
    darkMode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    hideObsolete: [{
      type: Input
    }],
    categories: [{
      type: Input
    }],
    activeCategories: [{
      type: Input
    }],
    set: [{
      type: Input
    }],
    skin: [{
      type: Input
    }],
    isNative: [{
      type: Input
    }],
    emojiSize: [{
      type: Input
    }],
    sheetSize: [{
      type: Input
    }],
    emojisToShowFilter: [{
      type: Input
    }],
    showPreview: [{
      type: Input
    }],
    emojiTooltip: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    custom: [{
      type: Input
    }],
    hideRecent: [{
      type: Input
    }],
    imageUrlFn: [{
      type: Input
    }],
    include: [{
      type: Input
    }],
    exclude: [{
      type: Input
    }],
    notFoundEmoji: [{
      type: Input
    }],
    categoriesIcons: [{
      type: Input
    }],
    searchIcons: [{
      type: Input
    }],
    useButton: [{
      type: Input
    }],
    enableFrequentEmojiSort: [{
      type: Input
    }],
    enableSearch: [{
      type: Input
    }],
    showSingleCategory: [{
      type: Input
    }],
    virtualize: [{
      type: Input
    }],
    virtualizeOffset: [{
      type: Input
    }],
    recent: [{
      type: Input
    }],
    emojiClick: [{
      type: Output
    }],
    emojiSelect: [{
      type: Output
    }],
    skinChange: [{
      type: Output
    }],
    scrollRef: [{
      type: ViewChild,
      args: ["scrollRef", {
        static: true
      }]
    }],
    previewRef: [{
      type: ViewChild,
      args: [PreviewComponent, {
        static: false
      }]
    }],
    searchRef: [{
      type: ViewChild,
      args: [SearchComponent, {
        static: false
      }]
    }],
    categoryRefs: [{
      type: ViewChildren,
      args: [CategoryComponent]
    }],
    backgroundImageFn: [{
      type: Input
    }]
  });
})();
function dispatchInAngularContextIfObserved(emitter, ngZone, value) {
  if (emitter.observed) {
    ngZone.run(() => emitter.emit(value));
  }
}
var components = [PickerComponent, AnchorsComponent, CategoryComponent, SearchComponent, PreviewComponent, SkinComponent];
var PickerModule = class _PickerModule {
  static ɵfac = function PickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PickerModule,
    imports: [PickerComponent, AnchorsComponent, CategoryComponent, SearchComponent, PreviewComponent, SkinComponent],
    exports: [PickerComponent, AnchorsComponent, CategoryComponent, SearchComponent, PreviewComponent, SkinComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [components]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerModule, [{
    type: NgModule,
    args: [{
      imports: components,
      exports: components
    }]
  }], null, null);
})();
export {
  AnchorsComponent,
  CategoryComponent,
  EmojiFrequentlyService,
  EmojiSearch,
  PickerComponent,
  PickerModule,
  PreviewComponent,
  SearchComponent,
  SkinComponent
};
//# sourceMappingURL=@ctrl_ngx-emoji-mart.js.map
