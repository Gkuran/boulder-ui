
// Auto-inject Virtu UI styles
(function(){
  if (typeof document === 'undefined') return;
  var id = '__virtu-ui-styles__';
  if (document.getElementById(id)) return;
  var style = document.createElement('style');
  style.id = id;
  style.textContent = `/* === Virtu UI Design Tokens === */
:root {
  /* ─── Base palette ─────────────────────────────────────────────────────────── */
  --virtu-color-1: #1a1a1a;
  --virtu-color-2: #2a2a2a;
  --virtu-color-3: #3a3a3a;
  --virtu-color-4: #4a4a4a;
  --virtu-color-5: #f5f5f5;

  /* ─── Semantic colors ──────────────────────────────────────────────────────── */
  --virtu-color-primary: #ff7f72;
  --virtu-color-primary-hover: #ff6b5c;
  --virtu-color-primary-soft: rgba(255, 127, 114, 0.25);

  --virtu-color-surface: rgba(255, 255, 255, 0.06);
  --virtu-color-background: #1a1a1a;
  --virtu-color-background-subtle: rgba(255, 255, 255, 0.04);

  --virtu-color-border: rgba(255, 255, 255, 0.12);
  --virtu-color-muted: rgba(255, 255, 255, 0.4);

  /* ─── Text colors ──────────────────────────────────────────────────────────── */
  --virtu-color-text: #f5f5f5;
  --virtu-color-text-secondary: rgba(255, 255, 255, 0.6);
  --virtu-color-text-inverse: #1a1a1a;

  /* ─── State colors ─────────────────────────────────────────────────────────── */
  --virtu-color-danger: #e5484d;
  --virtu-color-danger-hover: #d13438;
  --virtu-color-success: #30a46c;
  --virtu-color-success-soft: rgba(48, 164, 108, 0.2);
  --virtu-color-warning: #f5a623;
  --virtu-color-warning-soft: rgba(245, 166, 35, 0.2);

  /* ─── Glass effect ─────────────────────────────────────────────────────────── */
  /*
   * Glass background: white-based with low opacity.
   * This is the key difference — white tint lets light through and
   * creates the luminous frosted look, unlike a dark gradient which
   * absorbs light and looks opaque.
   */
  --virtu-glass-bg: rgba(255, 255, 255, 0.08);

  /* Blur radius — how much the background content is diffused */
  --virtu-glass-blur: 20px;

  /* Saturate — makes colors behind the glass more vibrant (iOS-style) */
  --virtu-glass-saturate: saturate(180%);

  /* Border — visible enough to define the glass edge against dark bg */
  --virtu-glass-border: 1px solid rgba(255, 255, 255, 0.18);

  /*
   * Shadow — combines outer depth shadow with inset glow.
   * The inset shadows create the "refraction" / inner light that
   * makes glass look physical and luminous:
   *   1. Outer shadow for depth/elevation
   *   2. Top-edge inset highlight (light hitting the top of the glass)
   *   3. Bottom-edge subtle inset (softer reflection)
   *   4. Inner ambient glow (the "frosted" luminosity)
   */
  --virtu-glass-shadow:
    0 8px 32px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(255, 255, 255, 0.05);

  /* ─── Spacing ──────────────────────────────────────────────────────────────── */
  --virtu-spacing-xs: 4px;
  --virtu-spacing-sm: 8px;
  --virtu-spacing-md: 16px;
  --virtu-spacing-lg: 24px;
  --virtu-spacing-xl: 32px;

  /* ─── Border radius ────────────────────────────────────────────────────────── */
  --virtu-radius-sm: 6px;
  --virtu-radius-md: 10px;
  --virtu-radius-lg: 15px;

  /* ─── Typography ───────────────────────────────────────────────────────────── */
  --virtu-font-family:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --virtu-font-size-xs: 11px;
  --virtu-font-size-sm: 12px;
  --virtu-font-size-md: 14px;
  --virtu-font-size-lg: 16px;
  --virtu-font-size-xl: 20px;

  --virtu-line-height-sm: 1.4;
  --virtu-line-height-md: 1.5;

  --virtu-font-weight-regular: 400;
  --virtu-font-weight-medium: 500;
  --virtu-font-weight-semibold: 600;
  --virtu-font-weight-bold: 700;

  /* ─── Spinner ──────────────────────────────────────────────────────────────── */
  --virtu-spinner-size: 14px;
  --virtu-spinner-border-width: 2px;
  --virtu-spinner-color-track: rgba(255, 255, 255, 0.2);

  /* ─── Switch ───────────────────────────────────────────────────────────────── */
  --virtu-switch-track-width-sm: 32px;
  --virtu-switch-track-height-sm: 18px;
  --virtu-switch-thumb-size-sm: 14px;
  --virtu-switch-translate-sm: 14px;

  --virtu-switch-track-width-md: 40px;
  --virtu-switch-track-height-md: 22px;
  --virtu-switch-thumb-size-md: 18px;
  --virtu-switch-translate-md: 18px;

  --virtu-switch-track-width-lg: 48px;
  --virtu-switch-track-height-lg: 26px;
  --virtu-switch-thumb-size-lg: 22px;
  --virtu-switch-translate-lg: 22px;

  --virtu-switch-thumb-offset: 2px;

  /* ─── Checkbox ─────────────────────────────────────────────────────────────── */
  --virtu-checkbox-size: 16px;
  --virtu-checkbox-checkmark-size: 10px;

  /* ─── Transition ───────────────────────────────────────────────────────────── */
  --virtu-transition-fast: 150ms ease;
  --virtu-transition-normal: 200ms ease;
}

/* === Virtu UI Global Styles === */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--virtu-font-family);
  color: var(--virtu-color-text);
  background-color: var(--virtu-color-background);
}

/* === Virtu UI Component Styles === */
._root_6w38t_3{--_accordion-width-sm: 280px;--_accordion-width-md: 480px}._root_6w38t_3{font-family:var(--virtu-font-family);box-sizing:border-box;display:block}._root_6w38t_3._width-sm_6w38t_23{width:var(--_accordion-width-sm);max-width:var(--_accordion-width-sm);overflow-x:hidden}._root_6w38t_3._width-md_6w38t_29{width:var(--_accordion-width-md);max-width:var(--_accordion-width-md);overflow-x:hidden}._root_6w38t_3._width-full_6w38t_35{width:100%;max-width:100%;overflow-x:hidden}._root_6w38t_3._default_6w38t_45{background:var(--virtu-glass-bg);backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);-webkit-backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);border:var(--virtu-glass-border);border-radius:var(--virtu-radius-lg);box-shadow:var(--virtu-glass-shadow);overflow:hidden;position:relative}._root_6w38t_3._flush_6w38t_57{border:none;border-radius:0}._item_6w38t_64{display:block;width:100%;box-sizing:border-box;border-bottom:1px solid var(--virtu-color-border)}._item_6w38t_64:last-child{border-bottom:none}._itemDisabled_6w38t_75{opacity:.4;cursor:not-allowed}._trigger_6w38t_82{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box;padding:var(--virtu-spacing-md);background:transparent;border:none;cursor:pointer;text-align:left;color:var(--virtu-color-text);font-family:var(--virtu-font-family);font-size:var(--virtu-font-size-md);font-weight:var(--virtu-font-weight-medium);line-height:var(--virtu-line-height-sm);transition:background-color var(--virtu-transition-fast),color var(--virtu-transition-fast);gap:var(--virtu-spacing-sm)}._trigger_6w38t_82:hover:not(:disabled){background-color:#ffffff0f}._trigger_6w38t_82:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:-2px}._trigger_6w38t_82:disabled{cursor:not-allowed}._triggerLabel_6w38t_115{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._icon_6w38t_124{display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--virtu-color-muted);transition:transform .2s ease}._triggerOpen_6w38t_133 ._icon_6w38t_124{transform:rotate(180deg)}._content_6w38t_139{display:block;width:100%;box-sizing:border-box;overflow:hidden}._content_6w38t_139[hidden]{display:none}._contentInner_6w38t_150{padding:0 var(--virtu-spacing-md) var(--virtu-spacing-md);color:var(--virtu-color-text-secondary);font-size:var(--virtu-font-size-md);line-height:var(--virtu-line-height-md);word-break:break-word}._badge_tx2ik_1{display:inline-flex;align-items:center;padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);border-radius:var(--virtu-radius-sm);font-size:var(--virtu-font-size-xs);font-weight:var(--virtu-font-weight-medium);font-family:var(--virtu-font-family);line-height:var(--virtu-line-height-sm)}._default_tx2ik_14{background:#ffffff14;color:var(--virtu-color-text)}._success_tx2ik_19{background:var(--virtu-color-success-soft);color:var(--virtu-color-success)}._warning_tx2ik_24{background:var(--virtu-color-warning-soft);color:var(--virtu-color-warning)}._danger_tx2ik_29{background:#e5484d33;color:var(--virtu-color-danger)}._count_tx2ik_35{min-width:18px;height:18px;padding:0 5px;border-radius:999px;font-size:10px;font-weight:var(--virtu-font-weight-bold);line-height:1;background:var(--virtu-color-primary);color:var(--virtu-color-text-inverse);justify-content:center}._box_1hpx4_1{border-radius:var(--virtu-radius-lg);position:relative;transition:background var(--virtu-transition-normal),border-color var(--virtu-transition-normal),box-shadow var(--virtu-transition-normal)}._glass_1hpx4_12{background:var(--virtu-glass-bg);backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);-webkit-backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);border:var(--virtu-glass-border);box-shadow:var(--virtu-glass-shadow)}._glass_1hpx4_12:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.25) 30%,rgba(255,255,255,.25) 70%,transparent 100%);border-radius:var(--virtu-radius-lg) var(--virtu-radius-lg) 0 0;pointer-events:none}._solid_1hpx4_40{background:var(--virtu-color-2);border:1px solid var(--virtu-color-border)}._ghost_1hpx4_45{background:transparent;border:1px solid var(--virtu-color-border)}._paddingNone_1hpx4_52{padding:0}._paddingSm_1hpx4_56{padding:var(--virtu-spacing-sm)}._paddingMd_1hpx4_60{padding:var(--virtu-spacing-md)}._paddingLg_1hpx4_64{padding:var(--virtu-spacing-lg)}._button_gq6ff_1{border:none;padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);border-radius:var(--virtu-radius-md);cursor:pointer;font-size:var(--virtu-font-size-md);font-family:var(--virtu-font-family);font-weight:var(--virtu-font-weight-medium);display:inline-flex;align-items:center;justify-content:center;gap:var(--virtu-spacing-sm);transition:background var(--virtu-transition-normal),border-color var(--virtu-transition-normal),transform .1s ease,box-shadow var(--virtu-transition-normal)}._button_gq6ff_1:active:not(:disabled){transform:scale(.97)}._sm_gq6ff_29{padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);font-size:var(--virtu-font-size-sm);border-radius:var(--virtu-radius-sm)}._md_gq6ff_35{padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);font-size:var(--virtu-font-size-md)}._lg_gq6ff_40{padding:var(--virtu-spacing-md) var(--virtu-spacing-lg);font-size:var(--virtu-font-size-lg)}._primary_gq6ff_47{background:var(--virtu-color-primary);color:var(--virtu-color-text)}._primary_gq6ff_47:hover:not(:disabled){background:var(--virtu-color-primary-hover);box-shadow:0 0 16px #ff7f724d}._secondary_gq6ff_59{background:#ffffff14;border:1px solid var(--virtu-color-border);color:var(--virtu-color-text)}._secondary_gq6ff_59:hover:not(:disabled){background:#ffffff24;border-color:#fff3}._danger_gq6ff_72{background:var(--virtu-color-danger);color:var(--virtu-color-text-inverse)}._danger_gq6ff_72:hover:not(:disabled){background:var(--virtu-color-danger-hover)}._button_gq6ff_1:disabled{opacity:.4;cursor:not-allowed}._icon_gq6ff_90{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:1em;height:1em}._icon_gq6ff_90>svg{width:100%;height:100%}._spinner_gq6ff_106{width:var(--virtu-spinner-size);height:var(--virtu-spinner-size);border:var(--virtu-spinner-border-width) solid var(--virtu-spinner-color-track);border-top-color:currentColor;border-radius:50%;display:inline-block;animation:_spin_gq6ff_106 .6s linear infinite}@keyframes _spin_gq6ff_106{to{transform:rotate(360deg)}}._wrapper_25bb0_1{display:inline-flex;align-items:center;gap:var(--virtu-spacing-sm);cursor:pointer}._input_25bb0_9{position:absolute;opacity:0;pointer-events:none}._control_25bb0_15{width:var(--virtu-checkbox-size);height:var(--virtu-checkbox-size);border-radius:var(--virtu-radius-sm);border:1px solid var(--virtu-color-border);background:#ffffff0a;display:flex;align-items:center;justify-content:center;transition:background var(--virtu-transition-fast),border-color var(--virtu-transition-fast)}._input_25bb0_9:checked+._control_25bb0_15{background:var(--virtu-color-primary);border-color:var(--virtu-color-primary)}._checkmark_25bb0_39{width:var(--virtu-checkbox-checkmark-size);height:var(--virtu-checkbox-checkmark-size);color:var(--virtu-color-text-inverse);opacity:0;transform:scale(.5);transition:opacity var(--virtu-transition-fast),transform var(--virtu-transition-fast)}._input_25bb0_9:checked+._control_25bb0_15 ._checkmark_25bb0_39{opacity:1;transform:scale(1)}._label_25bb0_57{font-size:var(--virtu-font-size-sm);color:var(--virtu-color-text)}._root_ht7sw_3{display:flex;flex-direction:column;gap:var(--virtu-spacing-md);width:100%}._header_ht7sw_12{display:flex;flex-direction:column;gap:var(--virtu-spacing-sm)}._filters_ht7sw_18{display:flex;gap:var(--virtu-spacing-xs);flex-wrap:wrap}._tableWrapper_ht7sw_26{width:100%;overflow-x:auto;border-radius:var(--virtu-radius-lg)}._table_ht7sw_26{width:100%;border-collapse:collapse;border-spacing:0;font-family:var(--virtu-font-family)}._headCell_ht7sw_43{padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);color:#fff6;font-size:var(--virtu-font-size-xs);font-weight:var(--virtu-font-weight-semibold);text-transform:uppercase;letter-spacing:.06em;line-height:var(--virtu-line-height-md);white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.06)}._headCell_ht7sw_43._alignLeft_ht7sw_57{text-align:left}._headCell_ht7sw_43._alignCenter_ht7sw_61{text-align:center}._headCell_ht7sw_43._alignRight_ht7sw_65{text-align:right}._row_ht7sw_71{background:var(--virtu-glass-bg);backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);-webkit-backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);transition:background var(--virtu-transition-fast)}._row_ht7sw_71:hover{background:#ffffff0f}._row_ht7sw_71+._row_ht7sw_71{border-top:1px solid rgba(255,255,255,.04)}._cell_ht7sw_90{padding:var(--virtu-spacing-md) var(--virtu-spacing-md);color:var(--virtu-color-text);font-size:var(--virtu-font-size-sm);font-weight:var(--virtu-font-weight-regular);line-height:var(--virtu-line-height-md);white-space:nowrap;vertical-align:middle}._cell_ht7sw_90._alignLeft_ht7sw_57{text-align:left}._cell_ht7sw_90._alignCenter_ht7sw_61{text-align:center}._cell_ht7sw_90._alignRight_ht7sw_65{text-align:right}._emptyRow_ht7sw_116{background:transparent}._emptyCell_ht7sw_120{padding:var(--virtu-spacing-xl) var(--virtu-spacing-md);text-align:center;color:#ffffff4d;font-size:var(--virtu-font-size-sm)}._paginator_ht7sw_129{display:flex;align-items:center;justify-content:center;gap:var(--virtu-spacing-xs);padding:var(--virtu-spacing-sm) 0}._pageButton_ht7sw_137{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;padding:0 var(--virtu-spacing-xs);background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:var(--virtu-radius-sm);color:var(--virtu-color-text-secondary);font-family:var(--virtu-font-family);font-size:var(--virtu-font-size-sm);font-weight:var(--virtu-font-weight-medium);cursor:pointer;transition:background var(--virtu-transition-fast),border-color var(--virtu-transition-fast),color var(--virtu-transition-fast)}._pageButton_ht7sw_137:hover:not(:disabled){background:#ffffff14;border-color:#fff3;color:var(--virtu-color-text)}._pageButton_ht7sw_137:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:1px}._pageButton_ht7sw_137:disabled{opacity:.3;cursor:not-allowed}._pageButtonActive_ht7sw_179{background:var(--virtu-color-primary);border-color:var(--virtu-color-primary);color:var(--virtu-color-text-inverse)}._pageButtonActive_ht7sw_179:hover:not(:disabled){background:var(--virtu-color-primary-hover);border-color:var(--virtu-color-primary-hover);color:var(--virtu-color-text-inverse)}._pageEllipsis_ht7sw_191{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;color:#ffffff4d;font-size:var(--virtu-font-size-sm);-webkit-user-select:none;user-select:none}._wrapper_9b97c_3{position:relative;display:inline-flex;align-items:center;width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:var(--virtu-radius-lg);transition:border-color var(--virtu-transition-fast),background var(--virtu-transition-fast),box-shadow var(--virtu-transition-fast)}._wrapper_9b97c_3:focus-within{border-color:#ffffff38;background:#ffffff14;box-shadow:0 0 0 3px #ffffff0a}._input_9b97c_27{flex:1;min-width:0;width:100%;background:transparent;border:none;outline:none;color:var(--virtu-color-text);font-family:var(--virtu-font-family);font-weight:var(--virtu-font-weight-regular);line-height:var(--virtu-line-height-md);-webkit-appearance:none;appearance:none}._input_9b97c_27::placeholder{color:#ffffff4d}._input_9b97c_27:disabled{cursor:not-allowed}._wrapper_9b97c_3:has(._input_9b97c_27:disabled){opacity:.4}._sm_9b97c_60 ._input_9b97c_27{padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);font-size:var(--virtu-font-size-sm)}._md_9b97c_65 ._input_9b97c_27{padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);font-size:var(--virtu-font-size-md)}._lg_9b97c_70 ._input_9b97c_27{padding:var(--virtu-spacing-md) var(--virtu-spacing-lg);font-size:var(--virtu-font-size-lg)}._leadingIcon_9b97c_79{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:#ffffff59;pointer-events:none}._leadingIcon_9b97c_79>svg{display:block}._trailingIcon_9b97c_95{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:#ffffff59;pointer-events:none}._trailingIcon_9b97c_95>svg{display:block}._clearButton_9b97c_109{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background:transparent;border:none;border-radius:50%;padding:2px;cursor:pointer;color:#ffffff59;transition:color var(--virtu-transition-fast),background var(--virtu-transition-fast)}._clearButton_9b97c_109:hover{color:var(--virtu-color-text);background:#ffffff14}._clearButton_9b97c_109:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:1px}._clearButton_9b97c_109>svg{display:block}._sm_9b97c_60 ._leadingIcon_9b97c_79,._sm_9b97c_60 ._trailingIcon_9b97c_95,._sm_9b97c_60 ._clearButton_9b97c_109{width:14px;height:14px;margin:0 var(--virtu-spacing-xs)}._sm_9b97c_60 ._leadingIcon_9b97c_79>svg,._sm_9b97c_60 ._trailingIcon_9b97c_95>svg,._sm_9b97c_60 ._clearButton_9b97c_109>svg{width:14px;height:14px}._md_9b97c_65 ._leadingIcon_9b97c_79,._md_9b97c_65 ._trailingIcon_9b97c_95,._md_9b97c_65 ._clearButton_9b97c_109{width:16px;height:16px;margin:0 var(--virtu-spacing-sm)}._md_9b97c_65 ._leadingIcon_9b97c_79>svg,._md_9b97c_65 ._trailingIcon_9b97c_95>svg,._md_9b97c_65 ._clearButton_9b97c_109>svg{width:16px;height:16px}._lg_9b97c_70 ._leadingIcon_9b97c_79,._lg_9b97c_70 ._trailingIcon_9b97c_95,._lg_9b97c_70 ._clearButton_9b97c_109{width:18px;height:18px;margin:0 var(--virtu-spacing-sm)}._lg_9b97c_70 ._leadingIcon_9b97c_79>svg,._lg_9b97c_70 ._trailingIcon_9b97c_95>svg,._lg_9b97c_70 ._clearButton_9b97c_109>svg{width:18px;height:18px}._tag_1krmi_3{display:inline-flex;align-items:center;gap:var(--virtu-spacing-xs);padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);background:#ffffff0f;border:1px solid rgba(255,255,255,.14);border-radius:var(--virtu-radius-md);color:var(--virtu-color-text);font-family:var(--virtu-font-family);font-size:var(--virtu-font-size-sm);font-weight:var(--virtu-font-weight-medium);line-height:var(--virtu-line-height-sm);white-space:nowrap;-webkit-user-select:none;user-select:none;transition:background var(--virtu-transition-fast),border-color var(--virtu-transition-fast)}._active_1krmi_30{background:#ffffff1f;border-color:#ffffff47}._remove_1krmi_37{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;padding:0;margin:0;background:transparent;border:none;border-radius:50%;color:var(--virtu-color-muted);cursor:pointer;flex-shrink:0;transition:color var(--virtu-transition-fast),background var(--virtu-transition-fast)}._remove_1krmi_37:hover{color:var(--virtu-color-text);background:#ffffff1a}._remove_1krmi_37:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:1px}._remove_1krmi_37>svg{width:10px;height:10px;stroke:currentColor}._error_10dwu_1{font-weight:var(--virtu-font-weight-medium);font-size:var(--virtu-font-size-sm);margin-top:var(--virtu-spacing-xs);color:var(--virtu-color-danger)}._wrapper_14qzz_1{display:flex;flex-direction:column;gap:var(--virtu-spacing-xs)}._description_14qzz_7{font-size:var(--virtu-font-size-xs);color:var(--virtu-color-text-secondary)}._error_14qzz_12{font-size:var(--virtu-font-size-xs);color:var(--virtu-color-danger)}._label_cppi9_1{font-size:var(--virtu-font-size-sm);font-weight:var(--virtu-font-weight-medium);color:var(--virtu-color-text);cursor:pointer}._header_1rvi8_3{display:flex;align-items:center;gap:var(--virtu-spacing-sm);width:100%;min-height:64px;padding:0 var(--virtu-spacing-lg);font-family:var(--virtu-font-family);z-index:100;position:relative}._sticky_1rvi8_20{position:sticky;top:0}._glass_1rvi8_26{background:var(--virtu-glass-bg);backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);-webkit-backdrop-filter:blur(var(--virtu-glass-blur)) var(--virtu-glass-saturate);border-bottom:var(--virtu-glass-border);box-shadow:0 4px 24px #0003,inset 0 1px #ffffff1f,inset 0 -1px #ffffff0a}._glass_1rvi8_26:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.2) 20%,rgba(255,255,255,.2) 80%,transparent 100%);pointer-events:none}._transparent_1rvi8_57{background:transparent;border-bottom:none}._section_1rvi8_64{display:flex;align-items:center;gap:var(--virtu-spacing-sm);flex-shrink:0}._section_1rvi8_64._grow_1rvi8_71{flex:1;flex-shrink:1}._section_1rvi8_64._alignLeft_1rvi8_76{justify-content:flex-start}._section_1rvi8_64._alignCenter_1rvi8_80{justify-content:center}._section_1rvi8_64._alignRight_1rvi8_84{justify-content:flex-end}._action_1rvi8_90{position:relative;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;background:transparent;border:1px solid rgba(255,255,255,.08);border-radius:var(--virtu-radius-sm);color:var(--virtu-color-text-secondary);cursor:pointer;text-decoration:none;transition:background var(--virtu-transition-fast),border-color var(--virtu-transition-fast),color var(--virtu-transition-fast)}._action_1rvi8_90:hover{background:#ffffff12;border-color:#ffffff26;color:var(--virtu-color-text)}._action_1rvi8_90:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:2px}._actionIcon_1rvi8_126{width:18px;height:18px;display:flex;align-items:center;justify-content:center;pointer-events:none}._actionIcon_1rvi8_126 svg{width:100%;height:100%}._actionBadge_1rvi8_141{position:absolute;top:-5px;right:-5px}._input_1sssu_3{width:100%;border-radius:var(--virtu-radius-md);font-family:inherit;color:var(--virtu-color-text);transition:border-color var(--virtu-transition-fast),background var(--virtu-transition-fast),box-shadow var(--virtu-transition-fast)}._input_1sssu_3::placeholder{color:var(--virtu-color-muted)}._outline_1sssu_21{border:1px solid var(--virtu-color-border);background:#ffffff0a}._outline_1sssu_21:focus{outline:none;border-color:var(--virtu-color-primary);box-shadow:0 0 0 2px var(--virtu-color-primary-soft)}._filled_1sssu_32{border:1px solid transparent;background:#ffffff14}._filled_1sssu_32:focus{outline:none;border-color:var(--virtu-color-primary)}._sm_1sssu_44{padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);font-size:var(--virtu-font-size-sm)}._md_1sssu_49{padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);font-size:var(--virtu-font-size-md)}._lg_1sssu_54{padding:var(--virtu-spacing-md) var(--virtu-spacing-lg);font-size:var(--virtu-font-size-lg)}._error_1sssu_61{border-color:var(--virtu-color-danger)}._errorMessage_1sssu_65{font-size:var(--virtu-font-size-xs);color:var(--virtu-color-danger)}._input_1sssu_3:disabled{opacity:.4;cursor:not-allowed}._sidebar_dv0yq_3{display:flex;flex-direction:column;align-items:center;max-width:80px;width:80px;padding:var(--virtu-spacing-md) var(--virtu-spacing-sm);gap:var(--virtu-spacing-xs);background:#000;border-radius:var(--virtu-radius-lg);height:fit-content;box-sizing:border-box}._logo_dv0yq_26{display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-bottom:var(--virtu-spacing-md);flex-shrink:0}._logo_dv0yq_26>img,._logo_dv0yq_26>svg{width:100%;height:100%;object-fit:contain}._nav_dv0yq_47{display:flex;flex-direction:column;align-items:center;gap:var(--virtu-spacing-xs);width:100%;flex:1}._item_dv0yq_58{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--virtu-spacing-xs);width:100%;padding:var(--virtu-spacing-sm) 0;background:transparent;border:none;border-radius:var(--virtu-radius-md);color:var(--virtu-color-muted);text-decoration:none;cursor:pointer;font-family:var(--virtu-font-family);transition:color var(--virtu-transition-fast),background var(--virtu-transition-fast)}._item_dv0yq_58:hover{color:var(--virtu-color-text);background:#ffffff0f}._item_dv0yq_58:focus-visible{outline:2px solid var(--virtu-color-primary);outline-offset:-2px}._active_dv0yq_93{color:var(--virtu-color-text);background:#ffffff14}._active_dv0yq_93:hover{background:#ffffff1a}._iconWrapper_dv0yq_104{position:relative;display:flex;align-items:center;justify-content:center;width:24px;height:24px}._iconWrapper_dv0yq_104>svg{width:100%;height:100%}._badge_dv0yq_120{position:absolute;top:-4px;right:-4px;pointer-events:none}._label_dv0yq_129{font-size:10px;font-weight:var(--virtu-font-weight-medium);line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}._container_pjrpw_1{display:inline-flex;align-items:center;gap:var(--virtu-spacing-sm);cursor:pointer;font-family:var(--virtu-font-family)}._switch_pjrpw_9{position:relative;width:var(--_track-width, var(--virtu-switch-track-width-md));height:var(--_track-height, var(--virtu-switch-track-height-md))}._input_pjrpw_17{opacity:0;width:0;height:0;position:absolute}._track_pjrpw_24{position:absolute;inset:0;background-color:#ffffff1f;border-radius:999px;transition:background-color var(--virtu-transition-normal)}._thumb_pjrpw_32{position:absolute;top:var(--virtu-switch-thumb-offset);left:var(--virtu-switch-thumb-offset);width:var(--_thumb-size, var(--virtu-switch-thumb-size-md));height:var(--_thumb-size, var(--virtu-switch-thumb-size-md));border-radius:999px;background-color:#f5f5f5;transition:transform var(--virtu-transition-normal)}._sm_pjrpw_45{--_track-width: var(--virtu-switch-track-width-sm);--_track-height: var(--virtu-switch-track-height-sm);--_thumb-size: var(--virtu-switch-thumb-size-sm);--_translate: var(--virtu-switch-translate-sm)}._md_pjrpw_52{--_track-width: var(--virtu-switch-track-width-md);--_track-height: var(--virtu-switch-track-height-md);--_thumb-size: var(--virtu-switch-thumb-size-md);--_translate: var(--virtu-switch-translate-md)}._lg_pjrpw_59{--_track-width: var(--virtu-switch-track-width-lg);--_track-height: var(--virtu-switch-track-height-lg);--_thumb-size: var(--virtu-switch-thumb-size-lg);--_translate: var(--virtu-switch-translate-lg)}._input_pjrpw_17:checked+._track_pjrpw_24{background-color:var(--virtu-color-primary)}._input_pjrpw_17:checked+._track_pjrpw_24 ._thumb_pjrpw_32{transform:translate(var(--_translate, var(--virtu-switch-translate-md)))}._input_pjrpw_17:focus-visible+._track_pjrpw_24{outline:2px solid var(--virtu-color-primary);outline-offset:2px}._input_pjrpw_17:disabled+._track_pjrpw_24{background-color:#ffffff0f;cursor:not-allowed;opacity:.4}._label_pjrpw_93{font-size:var(--virtu-font-size-md);color:var(--virtu-color-text);-webkit-user-select:none;user-select:none}._textarea_d6y1k_1{width:100%;border-radius:var(--virtu-radius-md);font-family:inherit;color:var(--virtu-color-text);resize:vertical;transition:border-color var(--virtu-transition-fast),background var(--virtu-transition-fast),box-shadow var(--virtu-transition-fast)}._textarea_d6y1k_1::placeholder{color:var(--virtu-color-muted)}._outline_d6y1k_20{border:1px solid var(--virtu-color-border);background:#ffffff0a}._outline_d6y1k_20:focus{outline:none;border-color:var(--virtu-color-primary);box-shadow:0 0 0 2px var(--virtu-color-primary-soft)}._filled_d6y1k_31{border:1px solid transparent;background:#ffffff14}._filled_d6y1k_31:focus{outline:none;border-color:var(--virtu-color-primary)}._sm_d6y1k_43{padding:var(--virtu-spacing-xs) var(--virtu-spacing-sm);font-size:var(--virtu-font-size-sm)}._md_d6y1k_48{padding:var(--virtu-spacing-sm) var(--virtu-spacing-md);font-size:var(--virtu-font-size-md)}._lg_d6y1k_53{padding:var(--virtu-spacing-md) var(--virtu-spacing-lg);font-size:var(--virtu-font-size-lg)}._textarea_d6y1k_1:disabled{opacity:.4;cursor:not-allowed}
`;
  document.head.appendChild(style);
})();

import { Accordion as e, AccordionContent as t, AccordionItem as a, AccordionTrigger as m } from "./components/Accordion/Accordion.js";
import { Badge as p } from "./components/Badge/Badge.js";
import { Box as c } from "./components/Box/Box.js";
import { Button as i } from "./components/Button/Button.js";
import { Checkbox as l } from "./components/Checkbox/Checkbox.js";
import { DataTable as b, DataTableCell as g, DataTableHead as A, DataTablePaginator as B, DataTableRow as D } from "./components/DataTable/DataTable.js";
import { ErrorMessage as H } from "./components/ErrorMessage/ErrorMessage.js";
import { FormField as C } from "./components/FormField/FormField.js";
import { Header as I, HeaderAction as s, HeaderSection as u } from "./components/Header/Header.js";
import { Input as k } from "./components/Input/Input.js";
import { Label as L } from "./components/Label/Label.js";
import { SearchField as P } from "./components/SearchField/SearchField.js";
import { SideBar as j, SideBarItem as q } from "./components/SideBar/SideBar.js";
import { Switch as y } from "./components/Switch/Switch.js";
import { Tag as G } from "./components/Tag/Tag.js";
import { Textarea as K } from "./components/Textarea/Textarea.js";
export {
  e as Accordion,
  t as AccordionContent,
  a as AccordionItem,
  m as AccordionTrigger,
  p as Badge,
  c as Box,
  i as Button,
  l as Checkbox,
  b as DataTable,
  g as DataTableCell,
  A as DataTableHead,
  B as DataTablePaginator,
  D as DataTableRow,
  H as ErrorMessage,
  C as FormField,
  I as Header,
  s as HeaderAction,
  u as HeaderSection,
  k as Input,
  L as Label,
  P as SearchField,
  j as SideBar,
  q as SideBarItem,
  y as Switch,
  G as Tag,
  K as Textarea
};
//# sourceMappingURL=index.js.map
