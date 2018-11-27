using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class Death : MonoBehaviour {
	public GameObject DeathMenu;
	public void ToggleShowHide() {
		DeathMenu.SetActive(false);
	}
}
