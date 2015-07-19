initSidebarItems({"struct":[["SecretCollection","SecretCollection represents a collection of secret items stored in the Secret Service. A collection can be in a locked or unlocked state. Use `Lock::lock()` or `Lock::unlock()` to lock or unlock the collection. Use `get_items()` to lookup the items in the collection. There may not be any items exposed when the collection is locked."],["SecretItem","SecretItem represents a secret item stored in the Secret Service. Each item has a value, represented by a SecretValue, which can be retrieved by `get_secret()` or set by `set_secret()`. The item is only available when the item is not locked. Items can be locked or unlocked using the `Lock::lock()` or `Lock::unlock()` functions. The Lock trait is implemented by SecretItem. The Secret Service may not be able to unlock individual items, and may unlock an entire collection when a single item is unlocked. Each item has a set of attributes, which are used to locate the item later. These are not stored or transferred in a secure manner. Each attribute has a string name and a string value. Use `SecretService::search()` to search for items based on their attributes, and `set_attributes()` to change the attributes associated with an item. Items can be created with `create()` or `SecretService::store()`."],["SecretService","A SecretService object represents the Secret Service implementation which runs as a D-Bus service. In order to securely transfer secrets to the Sercret Service, a session is established. This will automatically be done when calling `SecretService::get()` To search for items, use the `search()` method. Multiple collections can exist in the Secret Service, each of which contains secret items. To access the list of Collections, use `get_collections()`. Certain actions on the Secret Service require user prompting to complete, such as creating a collection, or unlocking a collection. When such a prompt is necessary, then a SecretPrompt object is created by libsecret, and passed to the secret_service_prompt() method. In this way it is handled automatically."],["SecretValue","A SecretValue contains a password or other secret value. Use `SecretValue::get()` to get the actual secret data, such as a password. This library only supports content type `text/plain` for now."]]});