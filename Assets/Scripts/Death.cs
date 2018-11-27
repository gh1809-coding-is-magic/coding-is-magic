using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class Death : MonoBehaviour {
	public GameObject DeathMenu;
	void Start () {
		DeathMenu.SetActive(true);
	}
	public void ToggleShowHide() {
		DeathMenu.SetActive(false);
	}
}
