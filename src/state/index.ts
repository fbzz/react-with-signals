import { Signal, signal } from "@preact/signals-react";

export interface SignalAd {
  text: Signal<string>;
  link: {
    label: Signal<string>;
    url: Signal<string>;
  };
}

export const bannerAd: SignalAd = {
  text: signal("Welcome to our Signals 101"),
  link: {
    label: signal("Something"),
    url: signal("https://google.com"),
  },
};
