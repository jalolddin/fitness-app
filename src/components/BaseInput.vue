<script setup>
import { computed, ref, useSlots, watch } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "contained",
  },
  info: String,
  debounce: Number,
  mask: String,
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue", "focus"]);
const slots = useSlots();

const className = {
  variant: {
    contained: "tw-bg-light-gray",
  },
};

const isInvalid = ref(false);
const isFocused = ref(false);
const value = ref("");
const input = ref(null);
const debounceTimeoutId = ref(null);

const hasValue = computed(() => value.value !== "");

const handleInput = (event) => {
  if (debounceTimeoutId.value !== null) {
    clearTimeout(debounceTimeoutId.value);
  }

  value.value = event.target.value;

  const _emit = () => {
    emit("update:modelValue", value.value);
  };
  if (props.debounce !== undefined) {
    debounceTimeoutId.value = setTimeout(_emit, props.debounce);
  } else {
    _emit();
  }
};

const handleFocus = (event) => {
  isFocused.value = true;
  isInvalid.value = false;
  emit("focus", event);
};
const handleBlur = () => {
  if (!props.readonly && !hasValue.value && props.required) {
    isInvalid.value = true;
  }

  isFocused.value = false;
};

watch(
  () => props.modelValue,
  (newValue) => {
    const hasVal = newValue !== "";

    if (hasVal) {
      isInvalid.value = false;
    }

    value.value = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <div class="tw-w-full">
    <div
      v-if="slots.title"
      class="tw-mb-1 tw-flex tw-items-center tw-text-sm tw-font-medium tw-uppercase"
    >
      <slot name="title"></slot>
    </div>
    <label
      class="tw-flex tw-h-12 tw-cursor-text tw-items-center tw-gap-2 tw-rounded-xl tw-px-4 tw-transition-[background-color,border-color]"
      :class="[
        disabled
          ? '!tw-cursor-not-allowed !tw-bg-black-16'
          : [
              'tw-border tw-border-black-16',
              { 'hover:!tw-border-primary': !readonly },
            ],
        className.variant[variant],
        {
          '!tw-rounded-full': rounded,
          '!tw-border-primary !tw-bg-transparent': !readonly && isFocused,
          '!tw-border-red !tw-bg-transparent': isInvalid,
        },
      ]"
    >
      <slot name="prepend"></slot>
      <div class="tw-relative tw-w-full">
        <input
          ref="input"
          v-maska
          :required="!readonly && required"
          :data-maska="mask"
          class="tw-w-full tw-border-none tw-bg-transparent tw-placeholder-gray tw-outline-none"
          :class="{ 'tw-pointer-events-none': readonly }"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          :readonly="readonly"
          :disabled="disabled || undefined"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <input
          v-if="readonly"
          class="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-top-0 tw-z-[-1] tw-opacity-0"
          :type="type"
          :value="value"
          :required="required"
        />
      </div>
      <slot name="append"></slot>
    </label>
  </div>
</template>
