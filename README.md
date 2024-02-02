
# 動作確認手順
## Node.jsのインストール

https://nodejs.org/en

## EXPOアカウント作成

https://expo.dev/

## EXPOのコマンドラインツールのインストール

```
npm install -g expo-cli
```

## 実機にEXPOをインストール

https://play.google.com/store/apps/details?id=host.exp.exponent&pli=1

## packageインストール

```
npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/stack

npx expo install react-native-gesture-handler
```

## 実行

```
npx expo start
```
表示されたQRコードをインストールしたアプリで読み取る。

# 検証環境

android

# 作業時間記録表

- Reactnativeのリサーチ(40分)
- 開発環境のセットアップ(30分)
- 設計(30分)
- UIまわりの実装(1時間)
- データのidを紐づけの実装(3時間)
- 画像スライドの実装(1時間)
- リファクタリング(1時間)
- デバック(10分)