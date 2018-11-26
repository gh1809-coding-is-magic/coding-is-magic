using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class Death : MonoBehaviour {
	public GameObject DeathMenu;
	// Use this for initialization
	void Start () {
		DeathMenu.SetActive(true);
	}

	// Update is called once per frame
	void Update () {

	}

	public void ToggleShowHide() {
		DeathMenu.SetActive(false);
	}
}
